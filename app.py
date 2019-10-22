from flask import Flask, render_template,request
import re

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    # finding the Jaccard Similarity formula using the two strings by spliting each word onto a list
    if request.method=='POST':
        text_one=request.form['text-one']
        text_one_words=re.sub("[^\w]", " ",  text_one).split()
        print(text_one_words)
        text_two=request.form['text-two']
        text_two_words=re.sub("[^\w]", " ",  text_two).split()
        print(text_two_words)

        def jaccard_similarity(list1, list2):
            s1 = set(list1)
            s2 = set(list2)
            s3 = float(len(s1.intersection(s2))) / len(s1.union(s2))
            return str(s3)
        return render_template('results.html',result=jaccard_similarity(text_one, text_two))
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
