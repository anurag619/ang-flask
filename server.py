from flask import Flask, jsonify, request, render_template, json

app = Flask(__name__, template_folder= 'static/templates')

app.secret_key= 'some-secret-key'


@app.route('/' )
def index():
	return render_template('index.html')


if __name__ == '__main__':
	app.run(debug=True)
