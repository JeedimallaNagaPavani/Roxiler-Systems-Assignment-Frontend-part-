# Roxiler-Systems-Assignment-Frontend-part-
Frontend Description for MERN Stack Coding Challenge

The frontend of this project is built using React.js and serves as the user interface for displaying transaction data fetched from the backend. 

It provides an interactive dashboard where users can view, search, and analyze sales transactions for different months.

📌 Features of the Frontend

Transaction Table

Displays transactions for a selected month.

Supports search functionality (by title, description, or price).

Implements pagination to navigate through transactions.

Month Selection

Dropdown to select a month (January - December).
Default selection is March.
Sales Statistics

Shows total sales amount for the selected month.

Displays number of sold and unsold items.

Bar Chart - Price Range Distribution

Displays the count of items within different price ranges.

Uses react-chartjs-2 to visualize data.

Pie Chart - Category Distribution

Shows the number of items per product category.

API Integration

Fetches data from backend APIs using Axios.

Updates dynamically based on the selected month.

Responsive Design

Optimized for desktop and mobile screens using CSS.

💡 User Interaction Flow

User selects a month → Transactions update automatically.

User searches for a product → Filters transactions by title, description, or price.

User clicks "Next" or "Previous" → Loads paginated transactions.

User checks sales statistics → Views sales data in real-time.

User analyzes charts → Understands price range and category distribution.
