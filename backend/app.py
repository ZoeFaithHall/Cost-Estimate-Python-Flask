from flask import Flask  # type: ignore
from flask_graphql import GraphQLView  # type: ignore
from flask_cors import CORS  # type: ignore
import graphene  # type: ignore

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes (adjust origins as necessary)
CORS(app, resources={r"/*": {"origins": "*"}})

# Define GraphQL schema
class Query(graphene.ObjectType):
    # "hello" query with an optional "name" argument
    hello = graphene.String(name=graphene.String(default_value="world"))
    # "estimate_cost" query with a required "amount" argument
    estimate_cost = graphene.Float(amount=graphene.Float(required=True))

    def resolve_hello(self, info, name):
        """Resolver for 'hello' query."""
        return f"Hello, {name}!"

    def resolve_estimate_cost(self, info, amount):
        """Resolver for 'estimate_cost' query."""
        if amount <= 0:
            raise Exception("Amount must be greater than 0")
        # Example logic: Add a multiplier (adjust as needed)
        return amount * 1.2

# Create schema with the defined queries
schema = graphene.Schema(query=Query)

# Add GraphQL endpoint to the Flask app
app.add_url_rule(
    "/graphql",
    view_func=GraphQLView.as_view(
        "graphql", schema=schema, graphiql=True  # Enable GraphiQL UI for testing
    ),
)

if __name__ == "__main__":
    # Run the Flask app
    app.run(debug=True)