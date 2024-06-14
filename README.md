# neumorphic-lead-card

<div class="lead-card neumorphic-glass">
    <div class="lead-card-header">
        <h3 class="lead-card-title">Lead Overview</h3>
    </div>
    <div class="lead-card-body">
        <div class="lead-info">
            <div class="lead-info-item">
                <span class="lead-info-label">Lead Name:</span>
                <span class="lead-info-value">John Doe</span>
            </div>
            <div class="lead-info-item">
                <span class="lead-info-label">Phone:</span>
                <span class="lead-info-value">555-123-4567</span>
            </div>
            <div class="lead-info-item">
                <span class="lead-info-label">Email:</span>
                <span class="lead-info-value">john
.doe@example.com</span>
            </div>
        </div>
        <div class="lead-actions">
            <button class="btn btn-primary">View Details</button>
            <button class="btn btn-secondary">Contact Lead</button>
        </div>
    </div>
</div>
.lead-card {
    background: #f0f0f0; /* Light grey background */
    border-radius: 16px;
    padding: 20px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), 
                -8px -8px 16px rgba(255, 255, 255, 0.5); /* Neumorphism shadow */
}

.lead-card-header {
    text-align: center;
    margin-bottom: 10px;
}

.lead-card-title {
    font-size: 24px;
    color: #333;
}

.lead-card-body {
    display: flex;
    flex-direction: column;
}

.lead-info-item {
    margin-bottom: 10px;
}

.lead-info-label {
    font-weight: bold;
    color: #555;
}

.lead-info-value {
    color: #666;
}

.lead-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}

.btn {
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.btn-primary {
    background-color: #ff9900; /* Neon orange */
    color: #fff;
    border: none;
}

.btn-primary:hover {
    background-color: #ffaa33;
}

.btn-secondary {
    background-color: #00cc66; /* Neon green */
    color: #fff;
    border: none;
}

.btn-secondary:hover {
    background-color: #00e673;
}


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/neumorphic-lead-card.git
cd neumorphic-lead-card
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
