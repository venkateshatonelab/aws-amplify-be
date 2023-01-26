"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description All http status codes
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * */
class code {
    /** The request succeeded. */
    static OK = 200;
    /** The request succeeded, and a new resource was created as a result. */
    static CREATED = 201;
    /** The request has been received but not yet acted upon.
     * It is intended for cases where another process or server handles the request,
     * or for batch processing.
     * */
    static ACCEPTED = 202;
    /** There is no content to send for this request, but the headers may be useful. */
    static NO_CONTENT = 204;
    /** Tells the user agent to reset the document which sent this request.*/
    static RESET_CONTENT = 205;
    /** The request has more than one possible response.
     * The user agent or user should choose one of them.
     * */
    static MULTIPLE_CHOICE = 300;
    /** The URL of the requested resource has been changed permanently.
     * The new URL is given in the response.
     * */
    static MOVED_PERMANENTLY = 301;
    /** This response code means that the URI of requested resource
     * has been changed temporarily.
     * */
    static FOUND = 302;
    /** The server sends this response to direct the client to get the requested resource at
     * another URI with same method that was used in the prior request.
     * This has the same semantics as the `302` Found HTTP response code, with the exception
     * that the user agent must not change the HTTP method used: if a `POST` was used in the
     * first request, a `POST` must be used in the second request.
     * */
    static TEMPORARY_REDIRECT = 307;
    /** This means that the resource is now permanently located at another URI,
     * specified by the `Location:` HTTP Response header. This has the same semantics as the
     * `301 Moved Permanently` HTTP response code, with the exception that the user agent must not
     * change the HTTP method used: if a `POST` was used in the first request,
     * a `POST` must be used in the second request.
     * */
    static PERMANENT_REDIRECT = 308;
    /** The server cannot or will not process the request due to something that
     * is perceived to be a client error.
     * */
    static BAD_REQUEST = 400;
    /** Although the HTTP standard specifies "unauthorized", semantically this
     * response means "`unauthenticated`". That is, the client must authenticate
     * itself to get the requested response.
     * */
    static UNAUTHORIZED = 401;
    /** The client does not have access rights to the content; that is, it is unauthorized,
     * so the server is refusing to give the requested resource. Unlike `401 Unauthorized`,
     * the client's identity is known to the server.
     * */
    static FORBIDDEN = 403;
    /** The server can not find the requested resource. In the browser, this means the URL
     * is not recognized. In an API, this can also mean that the endpoint is valid but the
     * resource itself does not exist. Servers may also send this response instead of
     * `403 Forbidden` to hide the existence of a resource from an unauthorized client.
     * This response code is probably the most well known due to its frequent occurrence
     * on the web. */
    static NOT_FOUND = 404;
    /** The request method is known by the server but is not supported by the target resource.
     * For example, an API may not allow calling `DELETE` to remove a resource.
     * */
    static METHOD_NOT_ALLOWED = 405;
    /** This is similar to `401 Unauthorized` but authentication is needed to be done
     * by a proxy.
     * */
    static PROXY_AUTHENTICATION_REQUIRED = 407;
    /** This response is sent on an idle connection by some servers, even without any
     * previous request by the client. It means that the server would like to shut down
     * this unused connection.
     * */
    static REQUEST_TIMEOUT = 408;
    /** This response is sent when a request conflicts with the current state of the server. */
    static CONFLICT = 409;
    /** This response is sent when the requested content has been permanently deleted from
     * server, with no forwarding address. Clients are expected to remove their caches and
     * links to the resource. The HTTP specification intends this status code to be used for
     * "limited-time, promotional services". APIs should not feel compelled to indicate
     * resources that have been deleted with this status code.
     * */
    static GONE = 410;
    /** Server rejected the request because the `Content-Length` header field is not defined
     * and the server requires it.
     * */
    static LENGTH_REQUIRED = 411;
    /** The client has indicated preconditions in its headers which the server does not meet. */
    static PRECONDITION_FAILED = 412;
    /** Request entity is larger than limits defined by server. The server might close the
     * connection or return an `Retry-After` header field.
     * */
    static PAYLOAD_TOO_LARGE = 413;
    /** The URI requested by the client is longer than the server is willing to interpret. */
    static URI_TOO_LARGE = 413;
    /** The media format of the requested data is not supported by the server,
     * so the server is rejecting the request.
     * */
    static UNSUPPORTED_MEDIA_TYPE = 415;
    /** The user has sent too many requests in a given amount of time ("rate limiting"). */
    static TOO_MANY_REQUESTS = 429;
    /** The server has encountered a situation it does not know how to handle. */
    static INTERNAL_SERVER_ERROR = 500;
    /** The request method is not supported by the server and cannot be handled.
     * The only methods that servers are required to support
     * (and therefore that must not return this code) are GET and HEAD.
     * */
    static NOT_IMPLEMENTED = 501;
    /** This error response means that the server, while working as a gateway to get
     * a response needed to handle the request, got an invalid response.
     * */
    static BAD_GATEWAY = 502;
    /** The server is not ready to handle the request. Common causes are a server
     * that is down for maintenance or that is overloaded.
     * */
    static SERVICE_UNAVAILABLE = 503;
    /** This error response is given when the server is acting as a gateway and
     * cannot get a response in time.
     * */
    static GATEWAY_TIMEOUT = 504;
    /** The HTTP version used in the request is not supported by the server. */
    static HTTP_VERSION_NOT_SUPPORTED = 505;
}
exports.default = code;
