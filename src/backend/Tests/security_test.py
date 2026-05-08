from security_helpers.crypto_helper import hash_password, create_jwt

print(hash_password("hellothere"))

print(create_jwt(3, "testing12341"))