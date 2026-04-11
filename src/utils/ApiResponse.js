class ApiResponse {
    constructor(
        statusCode, 
        data, 
        message='Success'){

           this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400; // it should be less than 400 bcz it is api response and using apiResponse class
            //if the status code is >400, then we should send it using apiError class

    }
}