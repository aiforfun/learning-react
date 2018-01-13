from __future__ import print_function
import os
import sys
import boto
import boto.s3.connection
from boto.s3.key import Key


# The secret key is available as a secure environment variable
# on travis-ci to push the build documentation to Amazon S3.
AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
AWS_DEFAULT_REGION = os.environ['AWS_DEFAULT_REGION']
BUCKET_NAME = os.environ['AWS_S3_BUCKET_NAME']

conn = boto.s3.connect_to_region(AWS_DEFAULT_REGION, 
	aws_access_key_id=AWS_ACCESS_KEY_ID,
   	aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
   	is_secure=True,
   	calling_format=boto.s3.connection.OrdinaryCallingFormat())

bucket = conn.get_bucket(BUCKET_NAME)

root = sys.argv[1]

def uploadFolder(folder):
	for dirpath, dirnames, filenames in os.walk(folder):
		for filename in filenames:
			fn = os.path.join(dirpath, filename)
			k = Key(bucket)
			k.key = os.path.relpath(fn, folder)
			print('Uploading', k.key, '...')
			k.set_contents_from_filename(fn)
		for dirname in dirnames:
			uploadFolder(dirname)


uploadFolder(root)