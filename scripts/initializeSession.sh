clear

if [ "$(id -u)" -neq 0 ]; then
    echo "The session initializer script must be run by root or with sudo."
    exit 1
fi

echo "Initializing session..."
echo "Node Version: $(node -v)"
echo "Current User: $(whoami) (UID: $(id -u))"
echo "Project Path: $(pwd)"


echo "Taking ownership of all files..."
chown $(whoami):$(whoami) -R .

echo "Granting execution powers to scripts..."
chmod -R +xr scripts/

echo "Installing packages..."
pnpm install --frozen-lockfile

echo "Session initialization done!"