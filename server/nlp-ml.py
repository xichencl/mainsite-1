import sys
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize

def main():
	msg = sys.argv[1]
	# print(msg)
	sents = sent_tokenize(msg)
	queryStr = ''
	for s in sents:		
		if s.endswith('?'):
			queryStr += s + '###'

	print(queryStr[: -3])
	sys.stdout.flush()  

if __name__ == '__main__':
	main()