import json
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app,origins='*')


@app.route('/api/submit-form', methods=['POST'])
def submit_form():
    form_data = request.json  # Get the JSON data from the request
    # Process and store the form data as JSON in a file
    with open('form_data.json', 'a') as file:
        json.dump(form_data, file)
        file.write('\n')
    return jsonify({'message': 'Form data submitted successfully'})

if __name__ == '__main__':
    app.run()
