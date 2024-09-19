# Members API Documentation

This API provides endpoints for managing member data.

## Endpoints

### Get All Members

Retrieves a list of members with optional pagination.

- **URL:** `/members`
- **Method:** `GET`
- **Query Parameters:**
  - `page` (optional): Page number for pagination
  - `limit` (optional): Number of items per page
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    {
      "members": [array of member objects],
      "count": total number of members
    }
    ```
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "error": "error message" }`

### Get Member by ID

Retrieves a specific member by their ID.

- **URL:** `/members/:id`
- **Method:** `GET`
- **URL Parameters:** 
  - `id`: Member ID
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ member object }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "error": "error message" }`

### Create New Member

Creates a new member.

- **URL:** `/members`
- **Method:** `POST`
- **Request Body:** Member object
- **Success Response:**
  - **Code:** 201
  - **Content:** `{ created member object }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "error": "error message" }`

### Update Member

Updates an existing member.

- **URL:** `/members/:id`
- **Method:** `PATCH`
- **URL Parameters:**
  - `id`: Member ID
- **Request Body:** Updated member object
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ updated member object }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "error": "error message" }`

### Delete Member

Deletes a member.

- **URL:** `/members/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id`: Member ID
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ deleted member object }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "error": "error message" }`

## Error Handling

All endpoints return a 500 status code with an error message in case of server errors.

## Notes

- The API uses async/await for handling asynchronous operations.
- Pagination is supported for the "Get All Members" endpoint.
- All successful responses return JSON data.
