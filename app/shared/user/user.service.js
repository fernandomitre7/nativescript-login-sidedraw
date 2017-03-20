"use strict";
var core_1 = require("@angular/core");
var config_1 = require("../config");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.login = function (user) {
        config_1.Config.loggedIn = true;
        config_1.Config.loggedUser = user;
    };
    UserService.prototype.logout = function () {
        config_1.Config.loggedIn = false;
        delete config_1.Config.loggedUser;
    };
    UserService.prototype.isLoggedIn = function () {
        return config_1.Config.loggedIn;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFHM0Msb0NBQW1DO0FBR25DLElBQWEsV0FBVztJQUF4QjtJQWVBLENBQUM7SUFiRywyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLGVBQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksZUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLGVBQU0sQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBZXZCO0FBZlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgQ29uZmlnLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgQ29uZmlnLmxvZ2dlZFVzZXIgPSB1c2VyO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgQ29uZmlnLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIGRlbGV0ZSBDb25maWcubG9nZ2VkVXNlcjtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gQ29uZmlnLmxvZ2dlZEluO1xuICAgIH1cbn0iXX0=