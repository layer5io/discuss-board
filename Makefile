LEADERBOARD_DIR := leaderboard
PORT := 3000

# Commands
install:
	@echo "Installing dependencies..."
	cd $(LEADERBOARD_DIR) && npm install

start:
	@echo "Starting the site on port $(PORT)..."
	cd $(LEADERBOARD_DIR) && npm start

run: install start

.PHONY: install start run
