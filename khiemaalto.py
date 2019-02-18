from bottle import route, run, template

@route('/hello/<name>')
def index(name):
    return template('<b>Hello {{name}}</b>!', name=name)

run(host='localhost', port=443, certfile='khiemaalto.com.crt', keyfile='khiemaalto.com.key')
# run(host='localhost', port=8080)