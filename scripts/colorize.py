# Define your custom exception class
class InvalidOperationException(Exception):
    """Raised when the requested operation cannot be performed in the current state."""
    pass

def tokenize(s):
    tokens = []
    buf = ""
    i = 0

    def next():
        if i > len(tokens):
            raise InvalidOperationException("No more tokens.")

        i++
        return tokens[i]

    while i < len(s):
        c = s[i]

        # start of color sequence
        if c == "\\":
            