import sys
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize

def main():
	msg = sys.argv[1]
	# print(msg)
	sents = sent_tokenize(msg)
	queries = [s for s in sents if s.endswith('?')]
	# if len(queries) == 0:
	print(queries)
	sys.stdout.flush()  

if __name__ == '__main__':
	main()