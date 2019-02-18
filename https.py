from http.server import HTTPServer, BaseHTTPRequestHandler
import ssl
import json

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

		def _set_json_response_headers(self):
				self.send_response(200)
				# self.send_header('Content-type', 'application/json')
				self.end_headers()

		def do_GET(self):
				self._set_json_response_headers()
				# data = {}
				# data['banana'] = 'yellow'
				# json_data = json.dumps(data)
				text = json.dumps({'hello': 'world', 'received': 'ok'})
				self.wfile.write(text)

httpd = HTTPServer(('localhost', 443), SimpleHTTPRequestHandler)

httpd.socket = ssl.wrap_socket (httpd.socket, 
				keyfile="khiemaalto.com.key", 
				certfile='khiemaalto.com.crt', server_side=True)

httpd.serve_forever()