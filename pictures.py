import os

def upload_file(file):
    """Uploads a file to the server.

    Args:
        file (file object): The file to upload.

    Returns:
        str: The URL of the uploaded file.
    """

    # Save the file to the server.
    file_name = os.path.basename(file.name)
    file_path = os.path.join('/path/to/uploads', file_name)
    with open(file_path, 'wb') as f:
        f.write(file.read())

    # Generate the URL of the uploaded file.
    file_url = 'https://example.com/uploads/{}'.format(file_name)

    return file_url