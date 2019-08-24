/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.EitherAny = (function() {

    /**
     * Properties of an EitherAny.
     * @exports IEitherAny
     * @interface IEitherAny
     * @property {string|null} [type_url] EitherAny type_url
     * @property {Uint8Array|null} [value] EitherAny value
     */

    /**
     * Constructs a new EitherAny.
     * @exports EitherAny
     * @classdesc Represents an EitherAny.
     * @implements IEitherAny
     * @constructor
     * @param {IEitherAny=} [properties] Properties to set
     */
    function EitherAny(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EitherAny type_url.
     * @member {string} type_url
     * @memberof EitherAny
     * @instance
     */
    EitherAny.prototype.type_url = "";

    /**
     * EitherAny value.
     * @member {Uint8Array} value
     * @memberof EitherAny
     * @instance
     */
    EitherAny.prototype.value = $util.newBuffer([]);

    /**
     * Creates a new EitherAny instance using the specified properties.
     * @function create
     * @memberof EitherAny
     * @static
     * @param {IEitherAny=} [properties] Properties to set
     * @returns {EitherAny} EitherAny instance
     */
    EitherAny.create = function create(properties) {
        return new EitherAny(properties);
    };

    /**
     * Encodes the specified EitherAny message. Does not implicitly {@link EitherAny.verify|verify} messages.
     * @function encode
     * @memberof EitherAny
     * @static
     * @param {IEitherAny} message EitherAny message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherAny.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
        return writer;
    };

    /**
     * Encodes the specified EitherAny message, length delimited. Does not implicitly {@link EitherAny.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EitherAny
     * @static
     * @param {IEitherAny} message EitherAny message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherAny.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EitherAny message from the specified reader or buffer.
     * @function decode
     * @memberof EitherAny
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EitherAny} EitherAny
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherAny.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherAny();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type_url = reader.string();
                break;
            case 2:
                message.value = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EitherAny message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EitherAny
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EitherAny} EitherAny
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherAny.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EitherAny message.
     * @function verify
     * @memberof EitherAny
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EitherAny.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            if (!$util.isString(message.type_url))
                return "type_url: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
        return null;
    };

    /**
     * Creates an EitherAny message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EitherAny
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EitherAny} EitherAny
     */
    EitherAny.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherAny)
            return object;
        var message = new $root.EitherAny();
        if (object.type_url != null)
            message.type_url = String(object.type_url);
        if (object.value != null)
            if (typeof object.value === "string")
                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length)
                message.value = object.value;
        return message;
    };

    /**
     * Creates a plain object from an EitherAny message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EitherAny
     * @static
     * @param {EitherAny} message EitherAny
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EitherAny.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type_url = "";
            if (options.bytes === String)
                object.value = "";
            else {
                object.value = [];
                if (options.bytes !== Array)
                    object.value = $util.newBuffer(object.value);
            }
        }
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            object.type_url = message.type_url;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
    };

    /**
     * Converts this EitherAny to JSON.
     * @function toJSON
     * @memberof EitherAny
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EitherAny.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherAny;
})();

$root.EitherError = (function() {

    /**
     * Properties of an EitherError.
     * @exports IEitherError
     * @interface IEitherError
     * @property {Array.<string>|null} [messages] EitherError messages
     */

    /**
     * Constructs a new EitherError.
     * @exports EitherError
     * @classdesc Represents an EitherError.
     * @implements IEitherError
     * @constructor
     * @param {IEitherError=} [properties] Properties to set
     */
    function EitherError(properties) {
        this.messages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EitherError messages.
     * @member {Array.<string>} messages
     * @memberof EitherError
     * @instance
     */
    EitherError.prototype.messages = $util.emptyArray;

    /**
     * Creates a new EitherError instance using the specified properties.
     * @function create
     * @memberof EitherError
     * @static
     * @param {IEitherError=} [properties] Properties to set
     * @returns {EitherError} EitherError instance
     */
    EitherError.create = function create(properties) {
        return new EitherError(properties);
    };

    /**
     * Encodes the specified EitherError message. Does not implicitly {@link EitherError.verify|verify} messages.
     * @function encode
     * @memberof EitherError
     * @static
     * @param {IEitherError} message EitherError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherError.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.messages[i]);
        return writer;
    };

    /**
     * Encodes the specified EitherError message, length delimited. Does not implicitly {@link EitherError.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EitherError
     * @static
     * @param {IEitherError} message EitherError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EitherError message from the specified reader or buffer.
     * @function decode
     * @memberof EitherError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EitherError} EitherError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.messages && message.messages.length))
                    message.messages = [];
                message.messages.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EitherError message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EitherError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EitherError} EitherError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EitherError message.
     * @function verify
     * @memberof EitherError
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EitherError.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i)
                if (!$util.isString(message.messages[i]))
                    return "messages: string[] expected";
        }
        return null;
    };

    /**
     * Creates an EitherError message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EitherError
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EitherError} EitherError
     */
    EitherError.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherError)
            return object;
        var message = new $root.EitherError();
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".EitherError.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i)
                message.messages[i] = String(object.messages[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an EitherError message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EitherError
     * @static
     * @param {EitherError} message EitherError
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EitherError.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = message.messages[j];
        }
        return object;
    };

    /**
     * Converts this EitherError to JSON.
     * @function toJSON
     * @memberof EitherError
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EitherError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherError;
})();

$root.EitherSuccess = (function() {

    /**
     * Properties of an EitherSuccess.
     * @exports IEitherSuccess
     * @interface IEitherSuccess
     * @property {IEitherAny|null} [response] EitherSuccess response
     */

    /**
     * Constructs a new EitherSuccess.
     * @exports EitherSuccess
     * @classdesc Represents an EitherSuccess.
     * @implements IEitherSuccess
     * @constructor
     * @param {IEitherSuccess=} [properties] Properties to set
     */
    function EitherSuccess(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EitherSuccess response.
     * @member {IEitherAny|null|undefined} response
     * @memberof EitherSuccess
     * @instance
     */
    EitherSuccess.prototype.response = null;

    /**
     * Creates a new EitherSuccess instance using the specified properties.
     * @function create
     * @memberof EitherSuccess
     * @static
     * @param {IEitherSuccess=} [properties] Properties to set
     * @returns {EitherSuccess} EitherSuccess instance
     */
    EitherSuccess.create = function create(properties) {
        return new EitherSuccess(properties);
    };

    /**
     * Encodes the specified EitherSuccess message. Does not implicitly {@link EitherSuccess.verify|verify} messages.
     * @function encode
     * @memberof EitherSuccess
     * @static
     * @param {IEitherSuccess} message EitherSuccess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherSuccess.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.response != null && message.hasOwnProperty("response"))
            $root.EitherAny.encode(message.response, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EitherSuccess message, length delimited. Does not implicitly {@link EitherSuccess.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EitherSuccess
     * @static
     * @param {IEitherSuccess} message EitherSuccess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherSuccess.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EitherSuccess message from the specified reader or buffer.
     * @function decode
     * @memberof EitherSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EitherSuccess} EitherSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherSuccess.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherSuccess();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.response = $root.EitherAny.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EitherSuccess message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EitherSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EitherSuccess} EitherSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherSuccess.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EitherSuccess message.
     * @function verify
     * @memberof EitherSuccess
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EitherSuccess.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            var error = $root.EitherAny.verify(message.response);
            if (error)
                return "response." + error;
        }
        return null;
    };

    /**
     * Creates an EitherSuccess message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EitherSuccess
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EitherSuccess} EitherSuccess
     */
    EitherSuccess.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherSuccess)
            return object;
        var message = new $root.EitherSuccess();
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".EitherSuccess.response: object expected");
            message.response = $root.EitherAny.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from an EitherSuccess message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EitherSuccess
     * @static
     * @param {EitherSuccess} message EitherSuccess
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EitherSuccess.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.response = null;
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = $root.EitherAny.toObject(message.response, options);
        return object;
    };

    /**
     * Converts this EitherSuccess to JSON.
     * @function toJSON
     * @memberof EitherSuccess
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EitherSuccess.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherSuccess;
})();

$root.Either = (function() {

    /**
     * Properties of an Either.
     * @exports IEither
     * @interface IEither
     * @property {IEitherError|null} [error] Either error
     * @property {IEitherSuccess|null} [success] Either success
     */

    /**
     * Constructs a new Either.
     * @exports Either
     * @classdesc Represents an Either.
     * @implements IEither
     * @constructor
     * @param {IEither=} [properties] Properties to set
     */
    function Either(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Either error.
     * @member {IEitherError|null|undefined} error
     * @memberof Either
     * @instance
     */
    Either.prototype.error = null;

    /**
     * Either success.
     * @member {IEitherSuccess|null|undefined} success
     * @memberof Either
     * @instance
     */
    Either.prototype.success = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Either content.
     * @member {"error"|"success"|undefined} content
     * @memberof Either
     * @instance
     */
    Object.defineProperty(Either.prototype, "content", {
        get: $util.oneOfGetter($oneOfFields = ["error", "success"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Either instance using the specified properties.
     * @function create
     * @memberof Either
     * @static
     * @param {IEither=} [properties] Properties to set
     * @returns {Either} Either instance
     */
    Either.create = function create(properties) {
        return new Either(properties);
    };

    /**
     * Encodes the specified Either message. Does not implicitly {@link Either.verify|verify} messages.
     * @function encode
     * @memberof Either
     * @static
     * @param {IEither} message Either message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Either.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            $root.EitherError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.success != null && message.hasOwnProperty("success"))
            $root.EitherSuccess.encode(message.success, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Either message, length delimited. Does not implicitly {@link Either.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Either
     * @static
     * @param {IEither} message Either message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Either.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Either message from the specified reader or buffer.
     * @function decode
     * @memberof Either
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Either} Either
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Either.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Either();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = $root.EitherError.decode(reader, reader.uint32());
                break;
            case 2:
                message.success = $root.EitherSuccess.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Either message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Either
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Either} Either
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Either.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Either message.
     * @function verify
     * @memberof Either
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Either.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.error != null && message.hasOwnProperty("error")) {
            properties.content = 1;
            {
                var error = $root.EitherError.verify(message.error);
                if (error)
                    return "error." + error;
            }
        }
        if (message.success != null && message.hasOwnProperty("success")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                var error = $root.EitherSuccess.verify(message.success);
                if (error)
                    return "success." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Either message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Either
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Either} Either
     */
    Either.fromObject = function fromObject(object) {
        if (object instanceof $root.Either)
            return object;
        var message = new $root.Either();
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".Either.error: object expected");
            message.error = $root.EitherError.fromObject(object.error);
        }
        if (object.success != null) {
            if (typeof object.success !== "object")
                throw TypeError(".Either.success: object expected");
            message.success = $root.EitherSuccess.fromObject(object.success);
        }
        return message;
    };

    /**
     * Creates a plain object from an Either message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Either
     * @static
     * @param {Either} message Either
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Either.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = $root.EitherError.toObject(message.error, options);
            if (options.oneofs)
                object.content = "error";
        }
        if (message.success != null && message.hasOwnProperty("success")) {
            object.success = $root.EitherSuccess.toObject(message.success, options);
            if (options.oneofs)
                object.content = "success";
        }
        return object;
    };

    /**
     * Converts this Either to JSON.
     * @function toJSON
     * @memberof Either
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Either.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Either;
})();

$root.scalapb = (function() {

    /**
     * Namespace scalapb.
     * @exports scalapb
     * @namespace
     */
    var scalapb = {};

    scalapb.ScalaPbOptions = (function() {

        /**
         * Properties of a ScalaPbOptions.
         * @memberof scalapb
         * @interface IScalaPbOptions
         * @property {string|null} [package_name] ScalaPbOptions package_name
         * @property {boolean|null} [flat_package] ScalaPbOptions flat_package
         * @property {Array.<string>|null} ["import"] ScalaPbOptions import
         * @property {Array.<string>|null} [preamble] ScalaPbOptions preamble
         * @property {boolean|null} [single_file] ScalaPbOptions single_file
         * @property {boolean|null} [no_primitive_wrappers] ScalaPbOptions no_primitive_wrappers
         * @property {boolean|null} [primitive_wrappers] ScalaPbOptions primitive_wrappers
         * @property {string|null} [collection_type] ScalaPbOptions collection_type
         * @property {boolean|null} [preserve_unknown_fields] ScalaPbOptions preserve_unknown_fields
         * @property {string|null} [object_name] ScalaPbOptions object_name
         * @property {scalapb.ScalaPbOptions.OptionsScope|null} [scope] ScalaPbOptions scope
         * @property {boolean|null} [lenses] ScalaPbOptions lenses
         * @property {boolean|null} [retain_source_code_info] ScalaPbOptions retain_source_code_info
         * @property {string|null} [map_type] ScalaPbOptions map_type
         * @property {boolean|null} [test_only_no_java_conversions] ScalaPbOptions test_only_no_java_conversions
         */

        /**
         * Constructs a new ScalaPbOptions.
         * @memberof scalapb
         * @classdesc Represents a ScalaPbOptions.
         * @implements IScalaPbOptions
         * @constructor
         * @param {scalapb.IScalaPbOptions=} [properties] Properties to set
         */
        function ScalaPbOptions(properties) {
            this["import"] = [];
            this.preamble = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScalaPbOptions package_name.
         * @member {string} package_name
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.package_name = "";

        /**
         * ScalaPbOptions flat_package.
         * @member {boolean} flat_package
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.flat_package = false;

        /**
         * ScalaPbOptions import.
         * @member {Array.<string>} import
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype["import"] = $util.emptyArray;

        /**
         * ScalaPbOptions preamble.
         * @member {Array.<string>} preamble
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.preamble = $util.emptyArray;

        /**
         * ScalaPbOptions single_file.
         * @member {boolean} single_file
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.single_file = false;

        /**
         * ScalaPbOptions no_primitive_wrappers.
         * @member {boolean} no_primitive_wrappers
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.no_primitive_wrappers = false;

        /**
         * ScalaPbOptions primitive_wrappers.
         * @member {boolean} primitive_wrappers
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.primitive_wrappers = false;

        /**
         * ScalaPbOptions collection_type.
         * @member {string} collection_type
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.collection_type = "";

        /**
         * ScalaPbOptions preserve_unknown_fields.
         * @member {boolean} preserve_unknown_fields
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.preserve_unknown_fields = false;

        /**
         * ScalaPbOptions object_name.
         * @member {string} object_name
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.object_name = "";

        /**
         * ScalaPbOptions scope.
         * @member {scalapb.ScalaPbOptions.OptionsScope} scope
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.scope = 0;

        /**
         * ScalaPbOptions lenses.
         * @member {boolean} lenses
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.lenses = true;

        /**
         * ScalaPbOptions retain_source_code_info.
         * @member {boolean} retain_source_code_info
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.retain_source_code_info = false;

        /**
         * ScalaPbOptions map_type.
         * @member {string} map_type
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.map_type = "";

        /**
         * ScalaPbOptions test_only_no_java_conversions.
         * @member {boolean} test_only_no_java_conversions
         * @memberof scalapb.ScalaPbOptions
         * @instance
         */
        ScalaPbOptions.prototype.test_only_no_java_conversions = false;

        /**
         * Creates a new ScalaPbOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {scalapb.IScalaPbOptions=} [properties] Properties to set
         * @returns {scalapb.ScalaPbOptions} ScalaPbOptions instance
         */
        ScalaPbOptions.create = function create(properties) {
            return new ScalaPbOptions(properties);
        };

        /**
         * Encodes the specified ScalaPbOptions message. Does not implicitly {@link scalapb.ScalaPbOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {scalapb.IScalaPbOptions} message ScalaPbOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScalaPbOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.package_name != null && message.hasOwnProperty("package_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.package_name);
            if (message.flat_package != null && message.hasOwnProperty("flat_package"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.flat_package);
            if (message["import"] != null && message["import"].length)
                for (var i = 0; i < message["import"].length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message["import"][i]);
            if (message.preamble != null && message.preamble.length)
                for (var i = 0; i < message.preamble.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.preamble[i]);
            if (message.single_file != null && message.hasOwnProperty("single_file"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.single_file);
            if (message.primitive_wrappers != null && message.hasOwnProperty("primitive_wrappers"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.primitive_wrappers);
            if (message.no_primitive_wrappers != null && message.hasOwnProperty("no_primitive_wrappers"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.no_primitive_wrappers);
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.collection_type);
            if (message.preserve_unknown_fields != null && message.hasOwnProperty("preserve_unknown_fields"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.preserve_unknown_fields);
            if (message.object_name != null && message.hasOwnProperty("object_name"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.object_name);
            if (message.scope != null && message.hasOwnProperty("scope"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.scope);
            if (message.lenses != null && message.hasOwnProperty("lenses"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.lenses);
            if (message.retain_source_code_info != null && message.hasOwnProperty("retain_source_code_info"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.retain_source_code_info);
            if (message.map_type != null && message.hasOwnProperty("map_type"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.map_type);
            if (message.test_only_no_java_conversions != null && message.hasOwnProperty("test_only_no_java_conversions"))
                writer.uint32(/* id 100001, wireType 0 =*/800008).bool(message.test_only_no_java_conversions);
            return writer;
        };

        /**
         * Encodes the specified ScalaPbOptions message, length delimited. Does not implicitly {@link scalapb.ScalaPbOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {scalapb.IScalaPbOptions} message ScalaPbOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScalaPbOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScalaPbOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.ScalaPbOptions} ScalaPbOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScalaPbOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.ScalaPbOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.package_name = reader.string();
                    break;
                case 2:
                    message.flat_package = reader.bool();
                    break;
                case 3:
                    if (!(message["import"] && message["import"].length))
                        message["import"] = [];
                    message["import"].push(reader.string());
                    break;
                case 4:
                    if (!(message.preamble && message.preamble.length))
                        message.preamble = [];
                    message.preamble.push(reader.string());
                    break;
                case 5:
                    message.single_file = reader.bool();
                    break;
                case 7:
                    message.no_primitive_wrappers = reader.bool();
                    break;
                case 6:
                    message.primitive_wrappers = reader.bool();
                    break;
                case 8:
                    message.collection_type = reader.string();
                    break;
                case 9:
                    message.preserve_unknown_fields = reader.bool();
                    break;
                case 10:
                    message.object_name = reader.string();
                    break;
                case 11:
                    message.scope = reader.int32();
                    break;
                case 12:
                    message.lenses = reader.bool();
                    break;
                case 13:
                    message.retain_source_code_info = reader.bool();
                    break;
                case 14:
                    message.map_type = reader.string();
                    break;
                case 100001:
                    message.test_only_no_java_conversions = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ScalaPbOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.ScalaPbOptions} ScalaPbOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScalaPbOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScalaPbOptions message.
         * @function verify
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScalaPbOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.package_name != null && message.hasOwnProperty("package_name"))
                if (!$util.isString(message.package_name))
                    return "package_name: string expected";
            if (message.flat_package != null && message.hasOwnProperty("flat_package"))
                if (typeof message.flat_package !== "boolean")
                    return "flat_package: boolean expected";
            if (message["import"] != null && message.hasOwnProperty("import")) {
                if (!Array.isArray(message["import"]))
                    return "import: array expected";
                for (var i = 0; i < message["import"].length; ++i)
                    if (!$util.isString(message["import"][i]))
                        return "import: string[] expected";
            }
            if (message.preamble != null && message.hasOwnProperty("preamble")) {
                if (!Array.isArray(message.preamble))
                    return "preamble: array expected";
                for (var i = 0; i < message.preamble.length; ++i)
                    if (!$util.isString(message.preamble[i]))
                        return "preamble: string[] expected";
            }
            if (message.single_file != null && message.hasOwnProperty("single_file"))
                if (typeof message.single_file !== "boolean")
                    return "single_file: boolean expected";
            if (message.no_primitive_wrappers != null && message.hasOwnProperty("no_primitive_wrappers"))
                if (typeof message.no_primitive_wrappers !== "boolean")
                    return "no_primitive_wrappers: boolean expected";
            if (message.primitive_wrappers != null && message.hasOwnProperty("primitive_wrappers"))
                if (typeof message.primitive_wrappers !== "boolean")
                    return "primitive_wrappers: boolean expected";
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                if (!$util.isString(message.collection_type))
                    return "collection_type: string expected";
            if (message.preserve_unknown_fields != null && message.hasOwnProperty("preserve_unknown_fields"))
                if (typeof message.preserve_unknown_fields !== "boolean")
                    return "preserve_unknown_fields: boolean expected";
            if (message.object_name != null && message.hasOwnProperty("object_name"))
                if (!$util.isString(message.object_name))
                    return "object_name: string expected";
            if (message.scope != null && message.hasOwnProperty("scope"))
                switch (message.scope) {
                default:
                    return "scope: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.lenses != null && message.hasOwnProperty("lenses"))
                if (typeof message.lenses !== "boolean")
                    return "lenses: boolean expected";
            if (message.retain_source_code_info != null && message.hasOwnProperty("retain_source_code_info"))
                if (typeof message.retain_source_code_info !== "boolean")
                    return "retain_source_code_info: boolean expected";
            if (message.map_type != null && message.hasOwnProperty("map_type"))
                if (!$util.isString(message.map_type))
                    return "map_type: string expected";
            if (message.test_only_no_java_conversions != null && message.hasOwnProperty("test_only_no_java_conversions"))
                if (typeof message.test_only_no_java_conversions !== "boolean")
                    return "test_only_no_java_conversions: boolean expected";
            return null;
        };

        /**
         * Creates a ScalaPbOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.ScalaPbOptions} ScalaPbOptions
         */
        ScalaPbOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.ScalaPbOptions)
                return object;
            var message = new $root.scalapb.ScalaPbOptions();
            if (object.package_name != null)
                message.package_name = String(object.package_name);
            if (object.flat_package != null)
                message.flat_package = Boolean(object.flat_package);
            if (object["import"]) {
                if (!Array.isArray(object["import"]))
                    throw TypeError(".scalapb.ScalaPbOptions.import: array expected");
                message["import"] = [];
                for (var i = 0; i < object["import"].length; ++i)
                    message["import"][i] = String(object["import"][i]);
            }
            if (object.preamble) {
                if (!Array.isArray(object.preamble))
                    throw TypeError(".scalapb.ScalaPbOptions.preamble: array expected");
                message.preamble = [];
                for (var i = 0; i < object.preamble.length; ++i)
                    message.preamble[i] = String(object.preamble[i]);
            }
            if (object.single_file != null)
                message.single_file = Boolean(object.single_file);
            if (object.no_primitive_wrappers != null)
                message.no_primitive_wrappers = Boolean(object.no_primitive_wrappers);
            if (object.primitive_wrappers != null)
                message.primitive_wrappers = Boolean(object.primitive_wrappers);
            if (object.collection_type != null)
                message.collection_type = String(object.collection_type);
            if (object.preserve_unknown_fields != null)
                message.preserve_unknown_fields = Boolean(object.preserve_unknown_fields);
            if (object.object_name != null)
                message.object_name = String(object.object_name);
            switch (object.scope) {
            case "FILE":
            case 0:
                message.scope = 0;
                break;
            case "PACKAGE":
            case 1:
                message.scope = 1;
                break;
            }
            if (object.lenses != null)
                message.lenses = Boolean(object.lenses);
            if (object.retain_source_code_info != null)
                message.retain_source_code_info = Boolean(object.retain_source_code_info);
            if (object.map_type != null)
                message.map_type = String(object.map_type);
            if (object.test_only_no_java_conversions != null)
                message.test_only_no_java_conversions = Boolean(object.test_only_no_java_conversions);
            return message;
        };

        /**
         * Creates a plain object from a ScalaPbOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.ScalaPbOptions
         * @static
         * @param {scalapb.ScalaPbOptions} message ScalaPbOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScalaPbOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object["import"] = [];
                object.preamble = [];
            }
            if (options.defaults) {
                object.package_name = "";
                object.flat_package = false;
                object.single_file = false;
                object.primitive_wrappers = false;
                object.no_primitive_wrappers = false;
                object.collection_type = "";
                object.preserve_unknown_fields = false;
                object.object_name = "";
                object.scope = options.enums === String ? "FILE" : 0;
                object.lenses = true;
                object.retain_source_code_info = false;
                object.map_type = "";
                object.test_only_no_java_conversions = false;
            }
            if (message.package_name != null && message.hasOwnProperty("package_name"))
                object.package_name = message.package_name;
            if (message.flat_package != null && message.hasOwnProperty("flat_package"))
                object.flat_package = message.flat_package;
            if (message["import"] && message["import"].length) {
                object["import"] = [];
                for (var j = 0; j < message["import"].length; ++j)
                    object["import"][j] = message["import"][j];
            }
            if (message.preamble && message.preamble.length) {
                object.preamble = [];
                for (var j = 0; j < message.preamble.length; ++j)
                    object.preamble[j] = message.preamble[j];
            }
            if (message.single_file != null && message.hasOwnProperty("single_file"))
                object.single_file = message.single_file;
            if (message.primitive_wrappers != null && message.hasOwnProperty("primitive_wrappers"))
                object.primitive_wrappers = message.primitive_wrappers;
            if (message.no_primitive_wrappers != null && message.hasOwnProperty("no_primitive_wrappers"))
                object.no_primitive_wrappers = message.no_primitive_wrappers;
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                object.collection_type = message.collection_type;
            if (message.preserve_unknown_fields != null && message.hasOwnProperty("preserve_unknown_fields"))
                object.preserve_unknown_fields = message.preserve_unknown_fields;
            if (message.object_name != null && message.hasOwnProperty("object_name"))
                object.object_name = message.object_name;
            if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = options.enums === String ? $root.scalapb.ScalaPbOptions.OptionsScope[message.scope] : message.scope;
            if (message.lenses != null && message.hasOwnProperty("lenses"))
                object.lenses = message.lenses;
            if (message.retain_source_code_info != null && message.hasOwnProperty("retain_source_code_info"))
                object.retain_source_code_info = message.retain_source_code_info;
            if (message.map_type != null && message.hasOwnProperty("map_type"))
                object.map_type = message.map_type;
            if (message.test_only_no_java_conversions != null && message.hasOwnProperty("test_only_no_java_conversions"))
                object.test_only_no_java_conversions = message.test_only_no_java_conversions;
            return object;
        };

        /**
         * Converts this ScalaPbOptions to JSON.
         * @function toJSON
         * @memberof scalapb.ScalaPbOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScalaPbOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * OptionsScope enum.
         * @name scalapb.ScalaPbOptions.OptionsScope
         * @enum {string}
         * @property {number} FILE=0 FILE value
         * @property {number} PACKAGE=1 PACKAGE value
         */
        ScalaPbOptions.OptionsScope = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FILE"] = 0;
            values[valuesById[1] = "PACKAGE"] = 1;
            return values;
        })();

        return ScalaPbOptions;
    })();

    scalapb.MessageOptions = (function() {

        /**
         * Properties of a MessageOptions.
         * @memberof scalapb
         * @interface IMessageOptions
         * @property {Array.<string>|null} ["extends"] MessageOptions extends
         * @property {Array.<string>|null} [companion_extends] MessageOptions companion_extends
         * @property {Array.<string>|null} [annotations] MessageOptions annotations
         * @property {string|null} [type] MessageOptions type
         * @property {Array.<string>|null} [companion_annotations] MessageOptions companion_annotations
         * @property {Array.<string>|null} [sealed_oneof_extends] MessageOptions sealed_oneof_extends
         */

        /**
         * Constructs a new MessageOptions.
         * @memberof scalapb
         * @classdesc Represents a MessageOptions.
         * @implements IMessageOptions
         * @constructor
         * @param {scalapb.IMessageOptions=} [properties] Properties to set
         */
        function MessageOptions(properties) {
            this["extends"] = [];
            this.companion_extends = [];
            this.annotations = [];
            this.companion_annotations = [];
            this.sealed_oneof_extends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageOptions extends.
         * @member {Array.<string>} extends
         * @memberof scalapb.MessageOptions
         * @instance
         */
        MessageOptions.prototype["extends"] = $util.emptyArray;

        /**
         * MessageOptions companion_extends.
         * @member {Array.<string>} companion_extends
         * @memberof scalapb.MessageOptions
         * @instance
         */
        MessageOptions.prototype.companion_extends = $util.emptyArray;

        /**
         * MessageOptions annotations.
         * @member {Array.<string>} annotations
         * @memberof scalapb.MessageOptions
         * @instance
         */
        MessageOptions.prototype.annotations = $util.emptyArray;

        /**
         * MessageOptions type.
         * @member {string} type
         * @memberof scalapb.MessageOptions
         * @instance
         */
        MessageOptions.prototype.type = "";

        /**
         * MessageOptions companion_annotations.
         * @member {Array.<string>} companion_annotations
         * @memberof scalapb.MessageOptions
         * @instance
         */
        MessageOptions.prototype.companion_annotations = $util.emptyArray;

        /**
         * MessageOptions sealed_oneof_extends.
         * @member {Array.<string>} sealed_oneof_extends
         * @memberof scalapb.MessageOptions
         * @instance
         */
        MessageOptions.prototype.sealed_oneof_extends = $util.emptyArray;

        /**
         * Creates a new MessageOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.MessageOptions
         * @static
         * @param {scalapb.IMessageOptions=} [properties] Properties to set
         * @returns {scalapb.MessageOptions} MessageOptions instance
         */
        MessageOptions.create = function create(properties) {
            return new MessageOptions(properties);
        };

        /**
         * Encodes the specified MessageOptions message. Does not implicitly {@link scalapb.MessageOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.MessageOptions
         * @static
         * @param {scalapb.IMessageOptions} message MessageOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["extends"] != null && message["extends"].length)
                for (var i = 0; i < message["extends"].length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["extends"][i]);
            if (message.companion_extends != null && message.companion_extends.length)
                for (var i = 0; i < message.companion_extends.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.companion_extends[i]);
            if (message.annotations != null && message.annotations.length)
                for (var i = 0; i < message.annotations.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.annotations[i]);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            if (message.companion_annotations != null && message.companion_annotations.length)
                for (var i = 0; i < message.companion_annotations.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.companion_annotations[i]);
            if (message.sealed_oneof_extends != null && message.sealed_oneof_extends.length)
                for (var i = 0; i < message.sealed_oneof_extends.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.sealed_oneof_extends[i]);
            return writer;
        };

        /**
         * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link scalapb.MessageOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.MessageOptions
         * @static
         * @param {scalapb.IMessageOptions} message MessageOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.MessageOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.MessageOptions} MessageOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.MessageOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message["extends"] && message["extends"].length))
                        message["extends"] = [];
                    message["extends"].push(reader.string());
                    break;
                case 2:
                    if (!(message.companion_extends && message.companion_extends.length))
                        message.companion_extends = [];
                    message.companion_extends.push(reader.string());
                    break;
                case 3:
                    if (!(message.annotations && message.annotations.length))
                        message.annotations = [];
                    message.annotations.push(reader.string());
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    if (!(message.companion_annotations && message.companion_annotations.length))
                        message.companion_annotations = [];
                    message.companion_annotations.push(reader.string());
                    break;
                case 6:
                    if (!(message.sealed_oneof_extends && message.sealed_oneof_extends.length))
                        message.sealed_oneof_extends = [];
                    message.sealed_oneof_extends.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.MessageOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.MessageOptions} MessageOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageOptions message.
         * @function verify
         * @memberof scalapb.MessageOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["extends"] != null && message.hasOwnProperty("extends")) {
                if (!Array.isArray(message["extends"]))
                    return "extends: array expected";
                for (var i = 0; i < message["extends"].length; ++i)
                    if (!$util.isString(message["extends"][i]))
                        return "extends: string[] expected";
            }
            if (message.companion_extends != null && message.hasOwnProperty("companion_extends")) {
                if (!Array.isArray(message.companion_extends))
                    return "companion_extends: array expected";
                for (var i = 0; i < message.companion_extends.length; ++i)
                    if (!$util.isString(message.companion_extends[i]))
                        return "companion_extends: string[] expected";
            }
            if (message.annotations != null && message.hasOwnProperty("annotations")) {
                if (!Array.isArray(message.annotations))
                    return "annotations: array expected";
                for (var i = 0; i < message.annotations.length; ++i)
                    if (!$util.isString(message.annotations[i]))
                        return "annotations: string[] expected";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.companion_annotations != null && message.hasOwnProperty("companion_annotations")) {
                if (!Array.isArray(message.companion_annotations))
                    return "companion_annotations: array expected";
                for (var i = 0; i < message.companion_annotations.length; ++i)
                    if (!$util.isString(message.companion_annotations[i]))
                        return "companion_annotations: string[] expected";
            }
            if (message.sealed_oneof_extends != null && message.hasOwnProperty("sealed_oneof_extends")) {
                if (!Array.isArray(message.sealed_oneof_extends))
                    return "sealed_oneof_extends: array expected";
                for (var i = 0; i < message.sealed_oneof_extends.length; ++i)
                    if (!$util.isString(message.sealed_oneof_extends[i]))
                        return "sealed_oneof_extends: string[] expected";
            }
            return null;
        };

        /**
         * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.MessageOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.MessageOptions} MessageOptions
         */
        MessageOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.MessageOptions)
                return object;
            var message = new $root.scalapb.MessageOptions();
            if (object["extends"]) {
                if (!Array.isArray(object["extends"]))
                    throw TypeError(".scalapb.MessageOptions.extends: array expected");
                message["extends"] = [];
                for (var i = 0; i < object["extends"].length; ++i)
                    message["extends"][i] = String(object["extends"][i]);
            }
            if (object.companion_extends) {
                if (!Array.isArray(object.companion_extends))
                    throw TypeError(".scalapb.MessageOptions.companion_extends: array expected");
                message.companion_extends = [];
                for (var i = 0; i < object.companion_extends.length; ++i)
                    message.companion_extends[i] = String(object.companion_extends[i]);
            }
            if (object.annotations) {
                if (!Array.isArray(object.annotations))
                    throw TypeError(".scalapb.MessageOptions.annotations: array expected");
                message.annotations = [];
                for (var i = 0; i < object.annotations.length; ++i)
                    message.annotations[i] = String(object.annotations[i]);
            }
            if (object.type != null)
                message.type = String(object.type);
            if (object.companion_annotations) {
                if (!Array.isArray(object.companion_annotations))
                    throw TypeError(".scalapb.MessageOptions.companion_annotations: array expected");
                message.companion_annotations = [];
                for (var i = 0; i < object.companion_annotations.length; ++i)
                    message.companion_annotations[i] = String(object.companion_annotations[i]);
            }
            if (object.sealed_oneof_extends) {
                if (!Array.isArray(object.sealed_oneof_extends))
                    throw TypeError(".scalapb.MessageOptions.sealed_oneof_extends: array expected");
                message.sealed_oneof_extends = [];
                for (var i = 0; i < object.sealed_oneof_extends.length; ++i)
                    message.sealed_oneof_extends[i] = String(object.sealed_oneof_extends[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.MessageOptions
         * @static
         * @param {scalapb.MessageOptions} message MessageOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object["extends"] = [];
                object.companion_extends = [];
                object.annotations = [];
                object.companion_annotations = [];
                object.sealed_oneof_extends = [];
            }
            if (options.defaults)
                object.type = "";
            if (message["extends"] && message["extends"].length) {
                object["extends"] = [];
                for (var j = 0; j < message["extends"].length; ++j)
                    object["extends"][j] = message["extends"][j];
            }
            if (message.companion_extends && message.companion_extends.length) {
                object.companion_extends = [];
                for (var j = 0; j < message.companion_extends.length; ++j)
                    object.companion_extends[j] = message.companion_extends[j];
            }
            if (message.annotations && message.annotations.length) {
                object.annotations = [];
                for (var j = 0; j < message.annotations.length; ++j)
                    object.annotations[j] = message.annotations[j];
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.companion_annotations && message.companion_annotations.length) {
                object.companion_annotations = [];
                for (var j = 0; j < message.companion_annotations.length; ++j)
                    object.companion_annotations[j] = message.companion_annotations[j];
            }
            if (message.sealed_oneof_extends && message.sealed_oneof_extends.length) {
                object.sealed_oneof_extends = [];
                for (var j = 0; j < message.sealed_oneof_extends.length; ++j)
                    object.sealed_oneof_extends[j] = message.sealed_oneof_extends[j];
            }
            return object;
        };

        /**
         * Converts this MessageOptions to JSON.
         * @function toJSON
         * @memberof scalapb.MessageOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageOptions;
    })();

    scalapb.FieldOptions = (function() {

        /**
         * Properties of a FieldOptions.
         * @memberof scalapb
         * @interface IFieldOptions
         * @property {string|null} [type] FieldOptions type
         * @property {string|null} [scala_name] FieldOptions scala_name
         * @property {string|null} [collection_type] FieldOptions collection_type
         * @property {string|null} [key_type] FieldOptions key_type
         * @property {string|null} [value_type] FieldOptions value_type
         * @property {Array.<string>|null} [annotations] FieldOptions annotations
         * @property {string|null} [map_type] FieldOptions map_type
         * @property {boolean|null} [no_box] FieldOptions no_box
         */

        /**
         * Constructs a new FieldOptions.
         * @memberof scalapb
         * @classdesc Represents a FieldOptions.
         * @implements IFieldOptions
         * @constructor
         * @param {scalapb.IFieldOptions=} [properties] Properties to set
         */
        function FieldOptions(properties) {
            this.annotations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FieldOptions type.
         * @member {string} type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.type = "";

        /**
         * FieldOptions scala_name.
         * @member {string} scala_name
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.scala_name = "";

        /**
         * FieldOptions collection_type.
         * @member {string} collection_type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.collection_type = "";

        /**
         * FieldOptions key_type.
         * @member {string} key_type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.key_type = "";

        /**
         * FieldOptions value_type.
         * @member {string} value_type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.value_type = "";

        /**
         * FieldOptions annotations.
         * @member {Array.<string>} annotations
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.annotations = $util.emptyArray;

        /**
         * FieldOptions map_type.
         * @member {string} map_type
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.map_type = "";

        /**
         * FieldOptions no_box.
         * @member {boolean} no_box
         * @memberof scalapb.FieldOptions
         * @instance
         */
        FieldOptions.prototype.no_box = false;

        /**
         * Creates a new FieldOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.FieldOptions
         * @static
         * @param {scalapb.IFieldOptions=} [properties] Properties to set
         * @returns {scalapb.FieldOptions} FieldOptions instance
         */
        FieldOptions.create = function create(properties) {
            return new FieldOptions(properties);
        };

        /**
         * Encodes the specified FieldOptions message. Does not implicitly {@link scalapb.FieldOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.FieldOptions
         * @static
         * @param {scalapb.IFieldOptions} message FieldOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.scala_name != null && message.hasOwnProperty("scala_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.scala_name);
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.collection_type);
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.key_type);
            if (message.value_type != null && message.hasOwnProperty("value_type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.value_type);
            if (message.annotations != null && message.annotations.length)
                for (var i = 0; i < message.annotations.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.annotations[i]);
            if (message.map_type != null && message.hasOwnProperty("map_type"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.map_type);
            if (message.no_box != null && message.hasOwnProperty("no_box"))
                writer.uint32(/* id 30, wireType 0 =*/240).bool(message.no_box);
            return writer;
        };

        /**
         * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link scalapb.FieldOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.FieldOptions
         * @static
         * @param {scalapb.IFieldOptions} message FieldOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FieldOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.FieldOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.FieldOptions} FieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.FieldOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.scala_name = reader.string();
                    break;
                case 3:
                    message.collection_type = reader.string();
                    break;
                case 4:
                    message.key_type = reader.string();
                    break;
                case 5:
                    message.value_type = reader.string();
                    break;
                case 6:
                    if (!(message.annotations && message.annotations.length))
                        message.annotations = [];
                    message.annotations.push(reader.string());
                    break;
                case 7:
                    message.map_type = reader.string();
                    break;
                case 30:
                    message.no_box = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.FieldOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.FieldOptions} FieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FieldOptions message.
         * @function verify
         * @memberof scalapb.FieldOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FieldOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.scala_name != null && message.hasOwnProperty("scala_name"))
                if (!$util.isString(message.scala_name))
                    return "scala_name: string expected";
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                if (!$util.isString(message.collection_type))
                    return "collection_type: string expected";
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                if (!$util.isString(message.key_type))
                    return "key_type: string expected";
            if (message.value_type != null && message.hasOwnProperty("value_type"))
                if (!$util.isString(message.value_type))
                    return "value_type: string expected";
            if (message.annotations != null && message.hasOwnProperty("annotations")) {
                if (!Array.isArray(message.annotations))
                    return "annotations: array expected";
                for (var i = 0; i < message.annotations.length; ++i)
                    if (!$util.isString(message.annotations[i]))
                        return "annotations: string[] expected";
            }
            if (message.map_type != null && message.hasOwnProperty("map_type"))
                if (!$util.isString(message.map_type))
                    return "map_type: string expected";
            if (message.no_box != null && message.hasOwnProperty("no_box"))
                if (typeof message.no_box !== "boolean")
                    return "no_box: boolean expected";
            return null;
        };

        /**
         * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.FieldOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.FieldOptions} FieldOptions
         */
        FieldOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.FieldOptions)
                return object;
            var message = new $root.scalapb.FieldOptions();
            if (object.type != null)
                message.type = String(object.type);
            if (object.scala_name != null)
                message.scala_name = String(object.scala_name);
            if (object.collection_type != null)
                message.collection_type = String(object.collection_type);
            if (object.key_type != null)
                message.key_type = String(object.key_type);
            if (object.value_type != null)
                message.value_type = String(object.value_type);
            if (object.annotations) {
                if (!Array.isArray(object.annotations))
                    throw TypeError(".scalapb.FieldOptions.annotations: array expected");
                message.annotations = [];
                for (var i = 0; i < object.annotations.length; ++i)
                    message.annotations[i] = String(object.annotations[i]);
            }
            if (object.map_type != null)
                message.map_type = String(object.map_type);
            if (object.no_box != null)
                message.no_box = Boolean(object.no_box);
            return message;
        };

        /**
         * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.FieldOptions
         * @static
         * @param {scalapb.FieldOptions} message FieldOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FieldOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.annotations = [];
            if (options.defaults) {
                object.type = "";
                object.scala_name = "";
                object.collection_type = "";
                object.key_type = "";
                object.value_type = "";
                object.map_type = "";
                object.no_box = false;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.scala_name != null && message.hasOwnProperty("scala_name"))
                object.scala_name = message.scala_name;
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                object.collection_type = message.collection_type;
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                object.key_type = message.key_type;
            if (message.value_type != null && message.hasOwnProperty("value_type"))
                object.value_type = message.value_type;
            if (message.annotations && message.annotations.length) {
                object.annotations = [];
                for (var j = 0; j < message.annotations.length; ++j)
                    object.annotations[j] = message.annotations[j];
            }
            if (message.map_type != null && message.hasOwnProperty("map_type"))
                object.map_type = message.map_type;
            if (message.no_box != null && message.hasOwnProperty("no_box"))
                object.no_box = message.no_box;
            return object;
        };

        /**
         * Converts this FieldOptions to JSON.
         * @function toJSON
         * @memberof scalapb.FieldOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FieldOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FieldOptions;
    })();

    scalapb.EnumOptions = (function() {

        /**
         * Properties of an EnumOptions.
         * @memberof scalapb
         * @interface IEnumOptions
         * @property {Array.<string>|null} ["extends"] EnumOptions extends
         * @property {Array.<string>|null} [companion_extends] EnumOptions companion_extends
         * @property {string|null} [type] EnumOptions type
         */

        /**
         * Constructs a new EnumOptions.
         * @memberof scalapb
         * @classdesc Represents an EnumOptions.
         * @implements IEnumOptions
         * @constructor
         * @param {scalapb.IEnumOptions=} [properties] Properties to set
         */
        function EnumOptions(properties) {
            this["extends"] = [];
            this.companion_extends = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnumOptions extends.
         * @member {Array.<string>} extends
         * @memberof scalapb.EnumOptions
         * @instance
         */
        EnumOptions.prototype["extends"] = $util.emptyArray;

        /**
         * EnumOptions companion_extends.
         * @member {Array.<string>} companion_extends
         * @memberof scalapb.EnumOptions
         * @instance
         */
        EnumOptions.prototype.companion_extends = $util.emptyArray;

        /**
         * EnumOptions type.
         * @member {string} type
         * @memberof scalapb.EnumOptions
         * @instance
         */
        EnumOptions.prototype.type = "";

        /**
         * Creates a new EnumOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.EnumOptions
         * @static
         * @param {scalapb.IEnumOptions=} [properties] Properties to set
         * @returns {scalapb.EnumOptions} EnumOptions instance
         */
        EnumOptions.create = function create(properties) {
            return new EnumOptions(properties);
        };

        /**
         * Encodes the specified EnumOptions message. Does not implicitly {@link scalapb.EnumOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.EnumOptions
         * @static
         * @param {scalapb.IEnumOptions} message EnumOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnumOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["extends"] != null && message["extends"].length)
                for (var i = 0; i < message["extends"].length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["extends"][i]);
            if (message.companion_extends != null && message.companion_extends.length)
                for (var i = 0; i < message.companion_extends.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.companion_extends[i]);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            return writer;
        };

        /**
         * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link scalapb.EnumOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.EnumOptions
         * @static
         * @param {scalapb.IEnumOptions} message EnumOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnumOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.EnumOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.EnumOptions} EnumOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnumOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.EnumOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message["extends"] && message["extends"].length))
                        message["extends"] = [];
                    message["extends"].push(reader.string());
                    break;
                case 2:
                    if (!(message.companion_extends && message.companion_extends.length))
                        message.companion_extends = [];
                    message.companion_extends.push(reader.string());
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.EnumOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.EnumOptions} EnumOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnumOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnumOptions message.
         * @function verify
         * @memberof scalapb.EnumOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnumOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["extends"] != null && message.hasOwnProperty("extends")) {
                if (!Array.isArray(message["extends"]))
                    return "extends: array expected";
                for (var i = 0; i < message["extends"].length; ++i)
                    if (!$util.isString(message["extends"][i]))
                        return "extends: string[] expected";
            }
            if (message.companion_extends != null && message.hasOwnProperty("companion_extends")) {
                if (!Array.isArray(message.companion_extends))
                    return "companion_extends: array expected";
                for (var i = 0; i < message.companion_extends.length; ++i)
                    if (!$util.isString(message.companion_extends[i]))
                        return "companion_extends: string[] expected";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };

        /**
         * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.EnumOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.EnumOptions} EnumOptions
         */
        EnumOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.EnumOptions)
                return object;
            var message = new $root.scalapb.EnumOptions();
            if (object["extends"]) {
                if (!Array.isArray(object["extends"]))
                    throw TypeError(".scalapb.EnumOptions.extends: array expected");
                message["extends"] = [];
                for (var i = 0; i < object["extends"].length; ++i)
                    message["extends"][i] = String(object["extends"][i]);
            }
            if (object.companion_extends) {
                if (!Array.isArray(object.companion_extends))
                    throw TypeError(".scalapb.EnumOptions.companion_extends: array expected");
                message.companion_extends = [];
                for (var i = 0; i < object.companion_extends.length; ++i)
                    message.companion_extends[i] = String(object.companion_extends[i]);
            }
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };

        /**
         * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.EnumOptions
         * @static
         * @param {scalapb.EnumOptions} message EnumOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnumOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object["extends"] = [];
                object.companion_extends = [];
            }
            if (options.defaults)
                object.type = "";
            if (message["extends"] && message["extends"].length) {
                object["extends"] = [];
                for (var j = 0; j < message["extends"].length; ++j)
                    object["extends"][j] = message["extends"][j];
            }
            if (message.companion_extends && message.companion_extends.length) {
                object.companion_extends = [];
                for (var j = 0; j < message.companion_extends.length; ++j)
                    object.companion_extends[j] = message.companion_extends[j];
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this EnumOptions to JSON.
         * @function toJSON
         * @memberof scalapb.EnumOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnumOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnumOptions;
    })();

    scalapb.EnumValueOptions = (function() {

        /**
         * Properties of an EnumValueOptions.
         * @memberof scalapb
         * @interface IEnumValueOptions
         * @property {Array.<string>|null} ["extends"] EnumValueOptions extends
         */

        /**
         * Constructs a new EnumValueOptions.
         * @memberof scalapb
         * @classdesc Represents an EnumValueOptions.
         * @implements IEnumValueOptions
         * @constructor
         * @param {scalapb.IEnumValueOptions=} [properties] Properties to set
         */
        function EnumValueOptions(properties) {
            this["extends"] = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnumValueOptions extends.
         * @member {Array.<string>} extends
         * @memberof scalapb.EnumValueOptions
         * @instance
         */
        EnumValueOptions.prototype["extends"] = $util.emptyArray;

        /**
         * Creates a new EnumValueOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {scalapb.IEnumValueOptions=} [properties] Properties to set
         * @returns {scalapb.EnumValueOptions} EnumValueOptions instance
         */
        EnumValueOptions.create = function create(properties) {
            return new EnumValueOptions(properties);
        };

        /**
         * Encodes the specified EnumValueOptions message. Does not implicitly {@link scalapb.EnumValueOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {scalapb.IEnumValueOptions} message EnumValueOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnumValueOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["extends"] != null && message["extends"].length)
                for (var i = 0; i < message["extends"].length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["extends"][i]);
            return writer;
        };

        /**
         * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link scalapb.EnumValueOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {scalapb.IEnumValueOptions} message EnumValueOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnumValueOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.EnumValueOptions} EnumValueOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnumValueOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.EnumValueOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message["extends"] && message["extends"].length))
                        message["extends"] = [];
                    message["extends"].push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.EnumValueOptions} EnumValueOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnumValueOptions message.
         * @function verify
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnumValueOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["extends"] != null && message.hasOwnProperty("extends")) {
                if (!Array.isArray(message["extends"]))
                    return "extends: array expected";
                for (var i = 0; i < message["extends"].length; ++i)
                    if (!$util.isString(message["extends"][i]))
                        return "extends: string[] expected";
            }
            return null;
        };

        /**
         * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.EnumValueOptions} EnumValueOptions
         */
        EnumValueOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.EnumValueOptions)
                return object;
            var message = new $root.scalapb.EnumValueOptions();
            if (object["extends"]) {
                if (!Array.isArray(object["extends"]))
                    throw TypeError(".scalapb.EnumValueOptions.extends: array expected");
                message["extends"] = [];
                for (var i = 0; i < object["extends"].length; ++i)
                    message["extends"][i] = String(object["extends"][i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.EnumValueOptions
         * @static
         * @param {scalapb.EnumValueOptions} message EnumValueOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnumValueOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object["extends"] = [];
            if (message["extends"] && message["extends"].length) {
                object["extends"] = [];
                for (var j = 0; j < message["extends"].length; ++j)
                    object["extends"][j] = message["extends"][j];
            }
            return object;
        };

        /**
         * Converts this EnumValueOptions to JSON.
         * @function toJSON
         * @memberof scalapb.EnumValueOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnumValueOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnumValueOptions;
    })();

    scalapb.OneofOptions = (function() {

        /**
         * Properties of an OneofOptions.
         * @memberof scalapb
         * @interface IOneofOptions
         * @property {Array.<string>|null} ["extends"] OneofOptions extends
         */

        /**
         * Constructs a new OneofOptions.
         * @memberof scalapb
         * @classdesc Represents an OneofOptions.
         * @implements IOneofOptions
         * @constructor
         * @param {scalapb.IOneofOptions=} [properties] Properties to set
         */
        function OneofOptions(properties) {
            this["extends"] = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OneofOptions extends.
         * @member {Array.<string>} extends
         * @memberof scalapb.OneofOptions
         * @instance
         */
        OneofOptions.prototype["extends"] = $util.emptyArray;

        /**
         * Creates a new OneofOptions instance using the specified properties.
         * @function create
         * @memberof scalapb.OneofOptions
         * @static
         * @param {scalapb.IOneofOptions=} [properties] Properties to set
         * @returns {scalapb.OneofOptions} OneofOptions instance
         */
        OneofOptions.create = function create(properties) {
            return new OneofOptions(properties);
        };

        /**
         * Encodes the specified OneofOptions message. Does not implicitly {@link scalapb.OneofOptions.verify|verify} messages.
         * @function encode
         * @memberof scalapb.OneofOptions
         * @static
         * @param {scalapb.IOneofOptions} message OneofOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OneofOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["extends"] != null && message["extends"].length)
                for (var i = 0; i < message["extends"].length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message["extends"][i]);
            return writer;
        };

        /**
         * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link scalapb.OneofOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scalapb.OneofOptions
         * @static
         * @param {scalapb.IOneofOptions} message OneofOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OneofOptions message from the specified reader or buffer.
         * @function decode
         * @memberof scalapb.OneofOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scalapb.OneofOptions} OneofOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OneofOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scalapb.OneofOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message["extends"] && message["extends"].length))
                        message["extends"] = [];
                    message["extends"].push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scalapb.OneofOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scalapb.OneofOptions} OneofOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OneofOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OneofOptions message.
         * @function verify
         * @memberof scalapb.OneofOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OneofOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["extends"] != null && message.hasOwnProperty("extends")) {
                if (!Array.isArray(message["extends"]))
                    return "extends: array expected";
                for (var i = 0; i < message["extends"].length; ++i)
                    if (!$util.isString(message["extends"][i]))
                        return "extends: string[] expected";
            }
            return null;
        };

        /**
         * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scalapb.OneofOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scalapb.OneofOptions} OneofOptions
         */
        OneofOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.scalapb.OneofOptions)
                return object;
            var message = new $root.scalapb.OneofOptions();
            if (object["extends"]) {
                if (!Array.isArray(object["extends"]))
                    throw TypeError(".scalapb.OneofOptions.extends: array expected");
                message["extends"] = [];
                for (var i = 0; i < object["extends"].length; ++i)
                    message["extends"][i] = String(object["extends"][i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scalapb.OneofOptions
         * @static
         * @param {scalapb.OneofOptions} message OneofOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OneofOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object["extends"] = [];
            if (message["extends"] && message["extends"].length) {
                object["extends"] = [];
                for (var j = 0; j < message["extends"].length; ++j)
                    object["extends"][j] = message["extends"][j];
            }
            return object;
        };

        /**
         * Converts this OneofOptions to JSON.
         * @function toJSON
         * @memberof scalapb.OneofOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OneofOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OneofOptions;
    })();

    return scalapb;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (var i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (var i = 0; i < message.file.length; ++i) {
                        var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [public_dependency] FileDescriptorProto public_dependency
             * @property {Array.<number>|null} [weak_dependency] FileDescriptorProto weak_dependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [message_type] FileDescriptorProto message_type
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.public_dependency = [];
                this.weak_dependency = [];
                this.message_type = [];
                this.enum_type = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto public_dependency.
             * @member {Array.<number>} public_dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.public_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto weak_dependency.
             * @member {Array.<number>} weak_dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto message_type.
             * @member {Array.<google.protobuf.IDescriptorProto>} message_type
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.message_type = $util.emptyArray;

            /**
             * FileDescriptorProto enum_type.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto source_code_info.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} source_code_info
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.source_code_info = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && message.hasOwnProperty("package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.message_type != null && message.message_type.length)
                    for (var i = 0; i < message.message_type.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enum_type != null && message.enum_type.length)
                    for (var i = 0; i < message.enum_type.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (var i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.public_dependency != null && message.public_dependency.length)
                    for (var i = 0; i < message.public_dependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                if (message.weak_dependency != null && message.weak_dependency.length)
                    for (var i = 0; i < message.weak_dependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.public_dependency && message.public_dependency.length))
                            message.public_dependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.public_dependency.push(reader.int32());
                        } else
                            message.public_dependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weak_dependency && message.weak_dependency.length))
                            message.weak_dependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weak_dependency.push(reader.int32());
                        } else
                            message.weak_dependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.message_type && message.message_type.length))
                            message.message_type = [];
                        message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enum_type && message.enum_type.length))
                            message.enum_type = [];
                        message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (var i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.public_dependency != null && message.hasOwnProperty("public_dependency")) {
                    if (!Array.isArray(message.public_dependency))
                        return "public_dependency: array expected";
                    for (var i = 0; i < message.public_dependency.length; ++i)
                        if (!$util.isInteger(message.public_dependency[i]))
                            return "public_dependency: integer[] expected";
                }
                if (message.weak_dependency != null && message.hasOwnProperty("weak_dependency")) {
                    if (!Array.isArray(message.weak_dependency))
                        return "weak_dependency: array expected";
                    for (var i = 0; i < message.weak_dependency.length; ++i)
                        if (!$util.isInteger(message.weak_dependency[i]))
                            return "weak_dependency: integer[] expected";
                }
                if (message.message_type != null && message.hasOwnProperty("message_type")) {
                    if (!Array.isArray(message.message_type))
                        return "message_type: array expected";
                    for (var i = 0; i < message.message_type.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i]);
                        if (error)
                            return "message_type." + error;
                    }
                }
                if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                    if (!Array.isArray(message.enum_type))
                        return "enum_type: array expected";
                    for (var i = 0; i < message.enum_type.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                        if (error)
                            return "enum_type." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (var i = 0; i < message.service.length; ++i) {
                        var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.source_code_info != null && message.hasOwnProperty("source_code_info")) {
                    var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info);
                    if (error)
                        return "source_code_info." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.public_dependency) {
                    if (!Array.isArray(object.public_dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.public_dependency: array expected");
                    message.public_dependency = [];
                    for (var i = 0; i < object.public_dependency.length; ++i)
                        message.public_dependency[i] = object.public_dependency[i] | 0;
                }
                if (object.weak_dependency) {
                    if (!Array.isArray(object.weak_dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weak_dependency: array expected");
                    message.weak_dependency = [];
                    for (var i = 0; i < object.weak_dependency.length; ++i)
                        message.weak_dependency[i] = object.weak_dependency[i] | 0;
                }
                if (object.message_type) {
                    if (!Array.isArray(object.message_type))
                        throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                    message.message_type = [];
                    for (var i = 0; i < object.message_type.length; ++i) {
                        if (typeof object.message_type[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                        message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i]);
                    }
                }
                if (object.enum_type) {
                    if (!Array.isArray(object.enum_type))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                    message.enum_type = [];
                    for (var i = 0; i < object.enum_type.length; ++i) {
                        if (typeof object.enum_type[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                        message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.source_code_info != null) {
                    if (typeof object.source_code_info !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                    message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.message_type = [];
                    object.enum_type = [];
                    object.service = [];
                    object.extension = [];
                    object.public_dependency = [];
                    object.weak_dependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.source_code_info = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.message_type && message.message_type.length) {
                    object.message_type = [];
                    for (var j = 0; j < message.message_type.length; ++j)
                        object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options);
                }
                if (message.enum_type && message.enum_type.length) {
                    object.enum_type = [];
                    for (var j = 0; j < message.enum_type.length; ++j)
                        object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                    object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options);
                if (message.public_dependency && message.public_dependency.length) {
                    object.public_dependency = [];
                    for (var j = 0; j < message.public_dependency.length; ++j)
                        object.public_dependency[j] = message.public_dependency[j];
                }
                if (message.weak_dependency && message.weak_dependency.length) {
                    object.weak_dependency = [];
                    for (var j = 0; j < message.weak_dependency.length; ++j)
                        object.weak_dependency[j] = message.weak_dependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nested_type] DescriptorProto nested_type
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extension_range] DescriptorProto extension_range
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneof_decl] DescriptorProto oneof_decl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reserved_range] DescriptorProto reserved_range
             * @property {Array.<string>|null} [reserved_name] DescriptorProto reserved_name
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nested_type = [];
                this.enum_type = [];
                this.extension_range = [];
                this.oneof_decl = [];
                this.reserved_range = [];
                this.reserved_name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nested_type.
             * @member {Array.<google.protobuf.IDescriptorProto>} nested_type
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nested_type = $util.emptyArray;

            /**
             * DescriptorProto enum_type.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * DescriptorProto extension_range.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extension_range
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension_range = $util.emptyArray;

            /**
             * DescriptorProto oneof_decl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneof_decl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneof_decl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reserved_range.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reserved_range
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reserved_range = $util.emptyArray;

            /**
             * DescriptorProto reserved_name.
             * @member {Array.<string>} reserved_name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reserved_name = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (var i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nested_type != null && message.nested_type.length)
                    for (var i = 0; i < message.nested_type.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enum_type != null && message.enum_type.length)
                    for (var i = 0; i < message.enum_type.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extension_range != null && message.extension_range.length)
                    for (var i = 0; i < message.extension_range.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneof_decl != null && message.oneof_decl.length)
                    for (var i = 0; i < message.oneof_decl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reserved_range != null && message.reserved_range.length)
                    for (var i = 0; i < message.reserved_range.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reserved_name != null && message.reserved_name.length)
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nested_type && message.nested_type.length))
                            message.nested_type = [];
                        message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enum_type && message.enum_type.length))
                            message.enum_type = [];
                        message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extension_range && message.extension_range.length))
                            message.extension_range = [];
                        message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneof_decl && message.oneof_decl.length))
                            message.oneof_decl = [];
                        message.oneof_decl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reserved_range && message.reserved_range.length))
                            message.reserved_range = [];
                        message.reserved_range.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reserved_name && message.reserved_name.length))
                            message.reserved_name = [];
                        message.reserved_name.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (var i = 0; i < message.field.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                    if (!Array.isArray(message.nested_type))
                        return "nested_type: array expected";
                    for (var i = 0; i < message.nested_type.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i]);
                        if (error)
                            return "nested_type." + error;
                    }
                }
                if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                    if (!Array.isArray(message.enum_type))
                        return "enum_type: array expected";
                    for (var i = 0; i < message.enum_type.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                        if (error)
                            return "enum_type." + error;
                    }
                }
                if (message.extension_range != null && message.hasOwnProperty("extension_range")) {
                    if (!Array.isArray(message.extension_range))
                        return "extension_range: array expected";
                    for (var i = 0; i < message.extension_range.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i]);
                        if (error)
                            return "extension_range." + error;
                    }
                }
                if (message.oneof_decl != null && message.hasOwnProperty("oneof_decl")) {
                    if (!Array.isArray(message.oneof_decl))
                        return "oneof_decl: array expected";
                    for (var i = 0; i < message.oneof_decl.length; ++i) {
                        var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneof_decl[i]);
                        if (error)
                            return "oneof_decl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reserved_range != null && message.hasOwnProperty("reserved_range")) {
                    if (!Array.isArray(message.reserved_range))
                        return "reserved_range: array expected";
                    for (var i = 0; i < message.reserved_range.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reserved_range[i]);
                        if (error)
                            return "reserved_range." + error;
                    }
                }
                if (message.reserved_name != null && message.hasOwnProperty("reserved_name")) {
                    if (!Array.isArray(message.reserved_name))
                        return "reserved_name: array expected";
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        if (!$util.isString(message.reserved_name[i]))
                            return "reserved_name: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nested_type) {
                    if (!Array.isArray(object.nested_type))
                        throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                    message.nested_type = [];
                    for (var i = 0; i < object.nested_type.length; ++i) {
                        if (typeof object.nested_type[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                        message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i]);
                    }
                }
                if (object.enum_type) {
                    if (!Array.isArray(object.enum_type))
                        throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                    message.enum_type = [];
                    for (var i = 0; i < object.enum_type.length; ++i) {
                        if (typeof object.enum_type[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                        message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                    }
                }
                if (object.extension_range) {
                    if (!Array.isArray(object.extension_range))
                        throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                    message.extension_range = [];
                    for (var i = 0; i < object.extension_range.length; ++i) {
                        if (typeof object.extension_range[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                        message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i]);
                    }
                }
                if (object.oneof_decl) {
                    if (!Array.isArray(object.oneof_decl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: array expected");
                    message.oneof_decl = [];
                    for (var i = 0; i < object.oneof_decl.length; ++i) {
                        if (typeof object.oneof_decl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: object expected");
                        message.oneof_decl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneof_decl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reserved_range) {
                    if (!Array.isArray(object.reserved_range))
                        throw TypeError(".google.protobuf.DescriptorProto.reserved_range: array expected");
                    message.reserved_range = [];
                    for (var i = 0; i < object.reserved_range.length; ++i) {
                        if (typeof object.reserved_range[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_range: object expected");
                        message.reserved_range[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reserved_range[i]);
                    }
                }
                if (object.reserved_name) {
                    if (!Array.isArray(object.reserved_name))
                        throw TypeError(".google.protobuf.DescriptorProto.reserved_name: array expected");
                    message.reserved_name = [];
                    for (var i = 0; i < object.reserved_name.length; ++i)
                        message.reserved_name[i] = String(object.reserved_name[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nested_type = [];
                    object.enum_type = [];
                    object.extension_range = [];
                    object.extension = [];
                    object.oneof_decl = [];
                    object.reserved_range = [];
                    object.reserved_name = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nested_type && message.nested_type.length) {
                    object.nested_type = [];
                    for (var j = 0; j < message.nested_type.length; ++j)
                        object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options);
                }
                if (message.enum_type && message.enum_type.length) {
                    object.enum_type = [];
                    for (var j = 0; j < message.enum_type.length; ++j)
                        object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                }
                if (message.extension_range && message.extension_range.length) {
                    object.extension_range = [];
                    for (var j = 0; j < message.extension_range.length; ++j)
                        object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneof_decl && message.oneof_decl.length) {
                    object.oneof_decl = [];
                    for (var j = 0; j < message.oneof_decl.length; ++j)
                        object.oneof_decl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneof_decl[j], options);
                }
                if (message.reserved_range && message.reserved_range.length) {
                    object.reserved_range = [];
                    for (var j = 0; j < message.reserved_range.length; ++j)
                        object.reserved_range[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reserved_range[j], options);
                }
                if (message.reserved_name && message.reserved_name.length) {
                    object.reserved_name = [];
                    for (var j = 0; j < message.reserved_name.length; ++j)
                        object.reserved_name[j] = message.reserved_name[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [type_name] FieldDescriptorProto type_name
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [default_value] FieldDescriptorProto default_value
             * @property {number|null} [oneof_index] FieldDescriptorProto oneof_index
             * @property {string|null} [json_name] FieldDescriptorProto json_name
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto type_name.
             * @member {string} type_name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type_name = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto default_value.
             * @member {string} default_value
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.default_value = "";

            /**
             * FieldDescriptorProto oneof_index.
             * @member {number} oneof_index
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneof_index = 0;

            /**
             * FieldDescriptorProto json_name.
             * @member {string} json_name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.json_name = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.type_name != null && message.hasOwnProperty("type_name"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                if (message.default_value != null && message.hasOwnProperty("default_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                if (message.json_name != null && message.hasOwnProperty("json_name"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.type_name = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.default_value = reader.string();
                        break;
                    case 9:
                        message.oneof_index = reader.int32();
                        break;
                    case 10:
                        message.json_name = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.type_name != null && message.hasOwnProperty("type_name"))
                    if (!$util.isString(message.type_name))
                        return "type_name: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.default_value != null && message.hasOwnProperty("default_value"))
                    if (!$util.isString(message.default_value))
                        return "default_value: string expected";
                if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                    if (!$util.isInteger(message.oneof_index))
                        return "oneof_index: integer expected";
                if (message.json_name != null && message.hasOwnProperty("json_name"))
                    if (!$util.isString(message.json_name))
                        return "json_name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.type_name != null)
                    message.type_name = String(object.type_name);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.default_value != null)
                    message.default_value = String(object.default_value);
                if (object.oneof_index != null)
                    message.oneof_index = object.oneof_index | 0;
                if (object.json_name != null)
                    message.json_name = String(object.json_name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.type_name = "";
                    object.default_value = "";
                    object.options = null;
                    object.oneof_index = 0;
                    object.json_name = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.type_name != null && message.hasOwnProperty("type_name"))
                    object.type_name = message.type_name;
                if (message.default_value != null && message.hasOwnProperty("default_value"))
                    object.default_value = message.default_value;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                    object.oneof_index = message.oneof_index;
                if (message.json_name != null && message.hasOwnProperty("json_name"))
                    object.json_name = message.json_name;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {string}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {string}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (var i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (var i = 0; i < message.method.length; ++i) {
                        var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [input_type] MethodDescriptorProto input_type
             * @property {string|null} [output_type] MethodDescriptorProto output_type
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [client_streaming] MethodDescriptorProto client_streaming
             * @property {boolean|null} [server_streaming] MethodDescriptorProto server_streaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto input_type.
             * @member {string} input_type
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.input_type = "";

            /**
             * MethodDescriptorProto output_type.
             * @member {string} output_type
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.output_type = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto client_streaming.
             * @member {boolean} client_streaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.client_streaming = false;

            /**
             * MethodDescriptorProto server_streaming.
             * @member {boolean} server_streaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.server_streaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.input_type != null && message.hasOwnProperty("input_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                if (message.output_type != null && message.hasOwnProperty("output_type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.input_type = reader.string();
                        break;
                    case 3:
                        message.output_type = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.client_streaming = reader.bool();
                        break;
                    case 6:
                        message.server_streaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.input_type != null && message.hasOwnProperty("input_type"))
                    if (!$util.isString(message.input_type))
                        return "input_type: string expected";
                if (message.output_type != null && message.hasOwnProperty("output_type"))
                    if (!$util.isString(message.output_type))
                        return "output_type: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                    if (typeof message.client_streaming !== "boolean")
                        return "client_streaming: boolean expected";
                if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                    if (typeof message.server_streaming !== "boolean")
                        return "server_streaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.input_type != null)
                    message.input_type = String(object.input_type);
                if (object.output_type != null)
                    message.output_type = String(object.output_type);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.client_streaming != null)
                    message.client_streaming = Boolean(object.client_streaming);
                if (object.server_streaming != null)
                    message.server_streaming = Boolean(object.server_streaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.input_type = "";
                    object.output_type = "";
                    object.options = null;
                    object.client_streaming = false;
                    object.server_streaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.input_type != null && message.hasOwnProperty("input_type"))
                    object.input_type = message.input_type;
                if (message.output_type != null && message.hasOwnProperty("output_type"))
                    object.output_type = message.output_type;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                    object.client_streaming = message.client_streaming;
                if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                    object.server_streaming = message.server_streaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [java_package] FileOptions java_package
             * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
             * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
             * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
             * @property {boolean|null} [java_string_check_utf8] FileOptions java_string_check_utf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
             * @property {string|null} [go_package] FileOptions go_package
             * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
             * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
             * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [cc_enable_arenas] FileOptions cc_enable_arenas
             * @property {string|null} [objc_class_prefix] FileOptions objc_class_prefix
             * @property {string|null} [csharp_namespace] FileOptions csharp_namespace
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
             * @property {scalapb.IScalaPbOptions|null} [".scalapb.options"] FileOptions .scalapb.options
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions java_package.
             * @member {string} java_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_package = "";

            /**
             * FileOptions java_outer_classname.
             * @member {string} java_outer_classname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_outer_classname = "";

            /**
             * FileOptions java_multiple_files.
             * @member {boolean} java_multiple_files
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_multiple_files = false;

            /**
             * FileOptions java_generate_equals_and_hash.
             * @member {boolean} java_generate_equals_and_hash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_generate_equals_and_hash = false;

            /**
             * FileOptions java_string_check_utf8.
             * @member {boolean} java_string_check_utf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_string_check_utf8 = false;

            /**
             * FileOptions optimize_for.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimize_for = 1;

            /**
             * FileOptions go_package.
             * @member {string} go_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.go_package = "";

            /**
             * FileOptions cc_generic_services.
             * @member {boolean} cc_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.cc_generic_services = false;

            /**
             * FileOptions java_generic_services.
             * @member {boolean} java_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_generic_services = false;

            /**
             * FileOptions py_generic_services.
             * @member {boolean} py_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.py_generic_services = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions cc_enable_arenas.
             * @member {boolean} cc_enable_arenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.cc_enable_arenas = false;

            /**
             * FileOptions objc_class_prefix.
             * @member {string} objc_class_prefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objc_class_prefix = "";

            /**
             * FileOptions csharp_namespace.
             * @member {string} csharp_namespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharp_namespace = "";

            /**
             * FileOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * FileOptions .scalapb.options.
             * @member {scalapb.IScalaPbOptions|null|undefined} .scalapb.options
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".scalapb.options"] = null;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.java_package != null && message.hasOwnProperty("java_package"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                if (message.go_package != null && message.hasOwnProperty("go_package"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.options"] != null && message.hasOwnProperty(".scalapb.options"))
                    $root.scalapb.ScalaPbOptions.encode(message[".scalapb.options"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.java_package = reader.string();
                        break;
                    case 8:
                        message.java_outer_classname = reader.string();
                        break;
                    case 10:
                        message.java_multiple_files = reader.bool();
                        break;
                    case 20:
                        message.java_generate_equals_and_hash = reader.bool();
                        break;
                    case 27:
                        message.java_string_check_utf8 = reader.bool();
                        break;
                    case 9:
                        message.optimize_for = reader.int32();
                        break;
                    case 11:
                        message.go_package = reader.string();
                        break;
                    case 16:
                        message.cc_generic_services = reader.bool();
                        break;
                    case 17:
                        message.java_generic_services = reader.bool();
                        break;
                    case 18:
                        message.py_generic_services = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.cc_enable_arenas = reader.bool();
                        break;
                    case 36:
                        message.objc_class_prefix = reader.string();
                        break;
                    case 37:
                        message.csharp_namespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.options"] = $root.scalapb.ScalaPbOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.java_package != null && message.hasOwnProperty("java_package"))
                    if (!$util.isString(message.java_package))
                        return "java_package: string expected";
                if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                    if (!$util.isString(message.java_outer_classname))
                        return "java_outer_classname: string expected";
                if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                    if (typeof message.java_multiple_files !== "boolean")
                        return "java_multiple_files: boolean expected";
                if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                    if (typeof message.java_generate_equals_and_hash !== "boolean")
                        return "java_generate_equals_and_hash: boolean expected";
                if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                    if (typeof message.java_string_check_utf8 !== "boolean")
                        return "java_string_check_utf8: boolean expected";
                if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                    switch (message.optimize_for) {
                    default:
                        return "optimize_for: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.go_package != null && message.hasOwnProperty("go_package"))
                    if (!$util.isString(message.go_package))
                        return "go_package: string expected";
                if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                    if (typeof message.cc_generic_services !== "boolean")
                        return "cc_generic_services: boolean expected";
                if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                    if (typeof message.java_generic_services !== "boolean")
                        return "java_generic_services: boolean expected";
                if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                    if (typeof message.py_generic_services !== "boolean")
                        return "py_generic_services: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                    if (typeof message.cc_enable_arenas !== "boolean")
                        return "cc_enable_arenas: boolean expected";
                if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                    if (!$util.isString(message.objc_class_prefix))
                        return "objc_class_prefix: string expected";
                if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                    if (!$util.isString(message.csharp_namespace))
                        return "csharp_namespace: string expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.options"] != null && message.hasOwnProperty(".scalapb.options")) {
                    var error = $root.scalapb.ScalaPbOptions.verify(message[".scalapb.options"]);
                    if (error)
                        return ".scalapb.options." + error;
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                var message = new $root.google.protobuf.FileOptions();
                if (object.java_package != null)
                    message.java_package = String(object.java_package);
                if (object.java_outer_classname != null)
                    message.java_outer_classname = String(object.java_outer_classname);
                if (object.java_multiple_files != null)
                    message.java_multiple_files = Boolean(object.java_multiple_files);
                if (object.java_generate_equals_and_hash != null)
                    message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                if (object.java_string_check_utf8 != null)
                    message.java_string_check_utf8 = Boolean(object.java_string_check_utf8);
                switch (object.optimize_for) {
                case "SPEED":
                case 1:
                    message.optimize_for = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimize_for = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimize_for = 3;
                    break;
                }
                if (object.go_package != null)
                    message.go_package = String(object.go_package);
                if (object.cc_generic_services != null)
                    message.cc_generic_services = Boolean(object.cc_generic_services);
                if (object.java_generic_services != null)
                    message.java_generic_services = Boolean(object.java_generic_services);
                if (object.py_generic_services != null)
                    message.py_generic_services = Boolean(object.py_generic_services);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.cc_enable_arenas != null)
                    message.cc_enable_arenas = Boolean(object.cc_enable_arenas);
                if (object.objc_class_prefix != null)
                    message.objc_class_prefix = String(object.objc_class_prefix);
                if (object.csharp_namespace != null)
                    message.csharp_namespace = String(object.csharp_namespace);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.options"] != null) {
                    if (typeof object[".scalapb.options"] !== "object")
                        throw TypeError(".google.protobuf.FileOptions..scalapb.options: object expected");
                    message[".scalapb.options"] = $root.scalapb.ScalaPbOptions.fromObject(object[".scalapb.options"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.java_package = "";
                    object.java_outer_classname = "";
                    object.optimize_for = options.enums === String ? "SPEED" : 1;
                    object.java_multiple_files = false;
                    object.go_package = "";
                    object.cc_generic_services = false;
                    object.java_generic_services = false;
                    object.py_generic_services = false;
                    object.java_generate_equals_and_hash = false;
                    object.deprecated = false;
                    object.java_string_check_utf8 = false;
                    object.cc_enable_arenas = false;
                    object.objc_class_prefix = "";
                    object.csharp_namespace = "";
                    object[".scalapb.options"] = null;
                }
                if (message.java_package != null && message.hasOwnProperty("java_package"))
                    object.java_package = message.java_package;
                if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                    object.java_outer_classname = message.java_outer_classname;
                if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                    object.optimize_for = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                    object.java_multiple_files = message.java_multiple_files;
                if (message.go_package != null && message.hasOwnProperty("go_package"))
                    object.go_package = message.go_package;
                if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                    object.cc_generic_services = message.cc_generic_services;
                if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                    object.java_generic_services = message.java_generic_services;
                if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                    object.py_generic_services = message.py_generic_services;
                if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                    object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                    object.java_string_check_utf8 = message.java_string_check_utf8;
                if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                    object.cc_enable_arenas = message.cc_enable_arenas;
                if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                    object.objc_class_prefix = message.objc_class_prefix;
                if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                    object.csharp_namespace = message.csharp_namespace;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.options"] != null && message.hasOwnProperty(".scalapb.options"))
                    object[".scalapb.options"] = $root.scalapb.ScalaPbOptions.toObject(message[".scalapb.options"], options);
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {string}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
             * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [map_entry] MessageOptions map_entry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
             * @property {scalapb.IMessageOptions|null} [".scalapb.message"] MessageOptions .scalapb.message
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions message_set_wire_format.
             * @member {boolean} message_set_wire_format
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.message_set_wire_format = false;

            /**
             * MessageOptions no_standard_descriptor_accessor.
             * @member {boolean} no_standard_descriptor_accessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.no_standard_descriptor_accessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions map_entry.
             * @member {boolean} map_entry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.map_entry = false;

            /**
             * MessageOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * MessageOptions .scalapb.message.
             * @member {scalapb.IMessageOptions|null|undefined} .scalapb.message
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".scalapb.message"] = null;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.message"] != null && message.hasOwnProperty(".scalapb.message"))
                    $root.scalapb.MessageOptions.encode(message[".scalapb.message"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message_set_wire_format = reader.bool();
                        break;
                    case 2:
                        message.no_standard_descriptor_accessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.map_entry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.message"] = $root.scalapb.MessageOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                    if (typeof message.message_set_wire_format !== "boolean")
                        return "message_set_wire_format: boolean expected";
                if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                    if (typeof message.no_standard_descriptor_accessor !== "boolean")
                        return "no_standard_descriptor_accessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                    if (typeof message.map_entry !== "boolean")
                        return "map_entry: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.message"] != null && message.hasOwnProperty(".scalapb.message")) {
                    var error = $root.scalapb.MessageOptions.verify(message[".scalapb.message"]);
                    if (error)
                        return ".scalapb.message." + error;
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                var message = new $root.google.protobuf.MessageOptions();
                if (object.message_set_wire_format != null)
                    message.message_set_wire_format = Boolean(object.message_set_wire_format);
                if (object.no_standard_descriptor_accessor != null)
                    message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.map_entry != null)
                    message.map_entry = Boolean(object.map_entry);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.message"] != null) {
                    if (typeof object[".scalapb.message"] !== "object")
                        throw TypeError(".google.protobuf.MessageOptions..scalapb.message: object expected");
                    message[".scalapb.message"] = $root.scalapb.MessageOptions.fromObject(object[".scalapb.message"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.message_set_wire_format = false;
                    object.no_standard_descriptor_accessor = false;
                    object.deprecated = false;
                    object.map_entry = false;
                    object[".scalapb.message"] = null;
                }
                if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                    object.message_set_wire_format = message.message_set_wire_format;
                if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                    object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                    object.map_entry = message.map_entry;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.message"] != null && message.hasOwnProperty(".scalapb.message"))
                    object[".scalapb.message"] = $root.scalapb.MessageOptions.toObject(message[".scalapb.message"], options);
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
             * @property {scalapb.IFieldOptions|null} [".scalapb.field"] FieldOptions .scalapb.field
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * FieldOptions .scalapb.field.
             * @member {scalapb.IFieldOptions|null|undefined} .scalapb.field
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".scalapb.field"] = null;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && message.hasOwnProperty("packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && message.hasOwnProperty("weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.field"] != null && message.hasOwnProperty(".scalapb.field"))
                    $root.scalapb.FieldOptions.encode(message[".scalapb.field"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.field"] = $root.scalapb.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.field"] != null && message.hasOwnProperty(".scalapb.field")) {
                    var error = $root.scalapb.FieldOptions.verify(message[".scalapb.field"]);
                    if (error)
                        return ".scalapb.field." + error;
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.field"] != null) {
                    if (typeof object[".scalapb.field"] !== "object")
                        throw TypeError(".google.protobuf.FieldOptions..scalapb.field: object expected");
                    message[".scalapb.field"] = $root.scalapb.FieldOptions.fromObject(object[".scalapb.field"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                    object[".scalapb.field"] = null;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.field"] != null && message.hasOwnProperty(".scalapb.field"))
                    object[".scalapb.field"] = $root.scalapb.FieldOptions.toObject(message[".scalapb.field"], options);
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {string}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {string}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] OneofOptions uninterpreted_option
             * @property {scalapb.IOneofOptions|null} [".scalapb.oneof"] OneofOptions .scalapb.oneof
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * OneofOptions .scalapb.oneof.
             * @member {scalapb.IOneofOptions|null|undefined} .scalapb.oneof
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype[".scalapb.oneof"] = null;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.oneof"] != null && message.hasOwnProperty(".scalapb.oneof"))
                    $root.scalapb.OneofOptions.encode(message[".scalapb.oneof"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.oneof"] = $root.scalapb.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.oneof"] != null && message.hasOwnProperty(".scalapb.oneof")) {
                    var error = $root.scalapb.OneofOptions.verify(message[".scalapb.oneof"]);
                    if (error)
                        return ".scalapb.oneof." + error;
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.oneof"] != null) {
                    if (typeof object[".scalapb.oneof"] !== "object")
                        throw TypeError(".google.protobuf.OneofOptions..scalapb.oneof: object expected");
                    message[".scalapb.oneof"] = $root.scalapb.OneofOptions.fromObject(object[".scalapb.oneof"]);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults)
                    object[".scalapb.oneof"] = null;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.oneof"] != null && message.hasOwnProperty(".scalapb.oneof"))
                    object[".scalapb.oneof"] = $root.scalapb.OneofOptions.toObject(message[".scalapb.oneof"], options);
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allow_alias] EnumOptions allow_alias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
             * @property {scalapb.IEnumOptions|null} [".scalapb.enum_options"] EnumOptions .scalapb.enum_options
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allow_alias.
             * @member {boolean} allow_alias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allow_alias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * EnumOptions .scalapb.enum_options.
             * @member {scalapb.IEnumOptions|null|undefined} .scalapb.enum_options
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype[".scalapb.enum_options"] = null;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.enum_options"] != null && message.hasOwnProperty(".scalapb.enum_options"))
                    $root.scalapb.EnumOptions.encode(message[".scalapb.enum_options"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allow_alias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.enum_options"] = $root.scalapb.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                    if (typeof message.allow_alias !== "boolean")
                        return "allow_alias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.enum_options"] != null && message.hasOwnProperty(".scalapb.enum_options")) {
                    var error = $root.scalapb.EnumOptions.verify(message[".scalapb.enum_options"]);
                    if (error)
                        return ".scalapb.enum_options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allow_alias != null)
                    message.allow_alias = Boolean(object.allow_alias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.enum_options"] != null) {
                    if (typeof object[".scalapb.enum_options"] !== "object")
                        throw TypeError(".google.protobuf.EnumOptions..scalapb.enum_options: object expected");
                    message[".scalapb.enum_options"] = $root.scalapb.EnumOptions.fromObject(object[".scalapb.enum_options"]);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.allow_alias = false;
                    object.deprecated = false;
                    object[".scalapb.enum_options"] = null;
                }
                if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                    object.allow_alias = message.allow_alias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.enum_options"] != null && message.hasOwnProperty(".scalapb.enum_options"))
                    object[".scalapb.enum_options"] = $root.scalapb.EnumOptions.toObject(message[".scalapb.enum_options"], options);
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
             * @property {scalapb.IEnumValueOptions|null} [".scalapb.enum_value"] EnumValueOptions .scalapb.enum_value
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * EnumValueOptions .scalapb.enum_value.
             * @member {scalapb.IEnumValueOptions|null|undefined} .scalapb.enum_value
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype[".scalapb.enum_value"] = null;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".scalapb.enum_value"] != null && message.hasOwnProperty(".scalapb.enum_value"))
                    $root.scalapb.EnumValueOptions.encode(message[".scalapb.enum_value"], writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1020:
                        message[".scalapb.enum_value"] = $root.scalapb.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".scalapb.enum_value"] != null && message.hasOwnProperty(".scalapb.enum_value")) {
                    var error = $root.scalapb.EnumValueOptions.verify(message[".scalapb.enum_value"]);
                    if (error)
                        return ".scalapb.enum_value." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                if (object[".scalapb.enum_value"] != null) {
                    if (typeof object[".scalapb.enum_value"] !== "object")
                        throw TypeError(".google.protobuf.EnumValueOptions..scalapb.enum_value: object expected");
                    message[".scalapb.enum_value"] = $root.scalapb.EnumValueOptions.fromObject(object[".scalapb.enum_value"]);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object[".scalapb.enum_value"] = null;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                if (message[".scalapb.enum_value"] != null && message.hasOwnProperty(".scalapb.enum_value"))
                    object[".scalapb.enum_value"] = $root.scalapb.EnumValueOptions.toObject(message[".scalapb.enum_value"], options);
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpreted_option.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                    if (!Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!Array.isArray(object.uninterpreted_option))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = [];
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (typeof object.uninterpreted_option[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = [];
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifier_value] UninterpretedOption identifier_value
             * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
             * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
             * @property {number|null} [double_value] UninterpretedOption double_value
             * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
             * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifier_value.
             * @member {string} identifier_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifier_value = "";

            /**
             * UninterpretedOption positive_int_value.
             * @member {number|Long} positive_int_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negative_int_value.
             * @member {number|Long} negative_int_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption double_value.
             * @member {number} double_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.double_value = 0;

            /**
             * UninterpretedOption string_value.
             * @member {Uint8Array} string_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.string_value = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregate_value.
             * @member {string} aggregate_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregate_value = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                if (message.double_value != null && message.hasOwnProperty("double_value"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifier_value = reader.string();
                        break;
                    case 4:
                        message.positive_int_value = reader.uint64();
                        break;
                    case 5:
                        message.negative_int_value = reader.int64();
                        break;
                    case 6:
                        message.double_value = reader.double();
                        break;
                    case 7:
                        message.string_value = reader.bytes();
                        break;
                    case 8:
                        message.aggregate_value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                    if (!$util.isString(message.identifier_value))
                        return "identifier_value: string expected";
                if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                    if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                        return "positive_int_value: integer|Long expected";
                if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                    if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                        return "negative_int_value: integer|Long expected";
                if (message.double_value != null && message.hasOwnProperty("double_value"))
                    if (typeof message.double_value !== "number")
                        return "double_value: number expected";
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                        return "string_value: buffer expected";
                if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                    if (!$util.isString(message.aggregate_value))
                        return "aggregate_value: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifier_value != null)
                    message.identifier_value = String(object.identifier_value);
                if (object.positive_int_value != null)
                    if ($util.Long)
                        (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                    else if (typeof object.positive_int_value === "string")
                        message.positive_int_value = parseInt(object.positive_int_value, 10);
                    else if (typeof object.positive_int_value === "number")
                        message.positive_int_value = object.positive_int_value;
                    else if (typeof object.positive_int_value === "object")
                        message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                if (object.negative_int_value != null)
                    if ($util.Long)
                        (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                    else if (typeof object.negative_int_value === "string")
                        message.negative_int_value = parseInt(object.negative_int_value, 10);
                    else if (typeof object.negative_int_value === "number")
                        message.negative_int_value = object.negative_int_value;
                    else if (typeof object.negative_int_value === "object")
                        message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                if (object.double_value != null)
                    message.double_value = Number(object.double_value);
                if (object.string_value != null)
                    if (typeof object.string_value === "string")
                        $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                    else if (object.string_value.length)
                        message.string_value = object.string_value;
                if (object.aggregate_value != null)
                    message.aggregate_value = String(object.aggregate_value);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifier_value = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positive_int_value = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negative_int_value = options.longs === String ? "0" : 0;
                    object.double_value = 0;
                    if (options.bytes === String)
                        object.string_value = "";
                    else {
                        object.string_value = [];
                        if (options.bytes !== Array)
                            object.string_value = $util.newBuffer(object.string_value);
                    }
                    object.aggregate_value = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                    object.identifier_value = message.identifier_value;
                if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                    if (typeof message.positive_int_value === "number")
                        object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                    else
                        object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                    if (typeof message.negative_int_value === "number")
                        object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                    else
                        object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                if (message.double_value != null && message.hasOwnProperty("double_value"))
                    object.double_value = options.json && !isFinite(message.double_value) ? String(message.double_value) : message.double_value;
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                    object.aggregate_value = message.aggregate_value;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} name_part NamePart name_part
                 * @property {boolean} is_extension NamePart is_extension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart name_part.
                 * @member {string} name_part
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.name_part = "";

                /**
                 * NamePart is_extension.
                 * @member {boolean} is_extension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.is_extension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name_part = reader.string();
                            break;
                        case 2:
                            message.is_extension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("name_part"))
                        throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                    if (!message.hasOwnProperty("is_extension"))
                        throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.name_part))
                        return "name_part: string expected";
                    if (typeof message.is_extension !== "boolean")
                        return "is_extension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.name_part != null)
                        message.name_part = String(object.name_part);
                    if (object.is_extension != null)
                        message.is_extension = Boolean(object.is_extension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name_part = "";
                        object.is_extension = false;
                    }
                    if (message.name_part != null && message.hasOwnProperty("name_part"))
                        object.name_part = message.name_part;
                    if (message.is_extension != null && message.hasOwnProperty("is_extension"))
                        object.is_extension = message.is_extension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (var i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (var i = 0; i < message.location.length; ++i) {
                        var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leading_comments] Location leading_comments
                 * @property {string|null} [trailing_comments] Location trailing_comments
                 * @property {Array.<string>|null} [leading_detached_comments] Location leading_detached_comments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leading_detached_comments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leading_comments.
                 * @member {string} leading_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leading_comments = "";

                /**
                 * Location trailing_comments.
                 * @member {string} trailing_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailing_comments = "";

                /**
                 * Location leading_detached_comments.
                 * @member {Array.<string>} leading_detached_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leading_detached_comments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                    if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                    if (message.leading_detached_comments != null && message.leading_detached_comments.length)
                        for (var i = 0; i < message.leading_detached_comments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leading_comments = reader.string();
                            break;
                        case 4:
                            message.trailing_comments = reader.string();
                            break;
                        case 6:
                            if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                message.leading_detached_comments = [];
                            message.leading_detached_comments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (var i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                        if (!$util.isString(message.leading_comments))
                            return "leading_comments: string expected";
                    if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                        if (!$util.isString(message.trailing_comments))
                            return "trailing_comments: string expected";
                    if (message.leading_detached_comments != null && message.hasOwnProperty("leading_detached_comments")) {
                        if (!Array.isArray(message.leading_detached_comments))
                            return "leading_detached_comments: array expected";
                        for (var i = 0; i < message.leading_detached_comments.length; ++i)
                            if (!$util.isString(message.leading_detached_comments[i]))
                                return "leading_detached_comments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leading_comments != null)
                        message.leading_comments = String(object.leading_comments);
                    if (object.trailing_comments != null)
                        message.trailing_comments = String(object.trailing_comments);
                    if (object.leading_detached_comments) {
                        if (!Array.isArray(object.leading_detached_comments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leading_detached_comments: array expected");
                        message.leading_detached_comments = [];
                        for (var i = 0; i < object.leading_detached_comments.length; ++i)
                            message.leading_detached_comments[i] = String(object.leading_detached_comments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leading_detached_comments = [];
                    }
                    if (options.defaults) {
                        object.leading_comments = "";
                        object.trailing_comments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                        object.leading_comments = message.leading_comments;
                    if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                        object.trailing_comments = message.trailing_comments;
                    if (message.leading_detached_comments && message.leading_detached_comments.length) {
                        object.leading_detached_comments = [];
                        for (var j = 0; j < message.leading_detached_comments.length; ++j)
                            object.leading_detached_comments[j] = message.leading_detached_comments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (var i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [source_file] Annotation source_file
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation source_file.
                 * @member {string} source_file
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.source_file = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.source_file != null && message.hasOwnProperty("source_file"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.source_file = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.source_file != null && message.hasOwnProperty("source_file"))
                        if (!$util.isString(message.source_file))
                            return "source_file: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.source_file != null)
                        message.source_file = String(object.source_file);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.source_file = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.source_file != null && message.hasOwnProperty("source_file"))
                        object.source_file = message.source_file;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
