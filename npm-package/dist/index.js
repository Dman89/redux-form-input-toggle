(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.index = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var hidden = {
        display: "none",
        "zIndex": -1,
        position: "absolute",
        left: -99999
    };
    var notHidden = {};

    var InputToggle = function (_React$Component) {
        _inherits(InputToggle, _React$Component);

        function InputToggle(props) {
            _classCallCheck(this, InputToggle);

            var _this = _possibleConstructorReturn(this, (InputToggle.__proto__ || Object.getPrototypeOf(InputToggle)).call(this, props));

            _this.state = {
                showInput: false,
                showLabel: true
            };
            return _this;
        }

        _createClass(InputToggle, [{
            key: "onClickToggle",
            value: function onClickToggle() {
                this.setState({
                    showInput: !this.state.showInput,
                    showLabel: !this.state.showLabel
                });
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "label",
                        { style: this.state.showInput ? hidden : notHidden, onClick: this.onClickToggle.bind(this), className: this.props.labelClassName },
                        this.props.label == '' ? this.props.placeholder : this.props.label
                    ),
                    _react2.default.createElement(
                        "span",
                        { style: this.state.showLabel ? hidden : notHidden, onBlur: this.onClickToggle.bind(this) },
                        this.props.children
                    )
                );
            }
        }]);

        return InputToggle;
    }(_react2.default.Component);

    ;

    exports.default = InputToggle;
});