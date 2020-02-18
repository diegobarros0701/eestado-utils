'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');

var FixReturn = {
  mutation: function mutation(object) {
    var data = object[Object.keys(object)[0]].returning[0];
    delete data.__typename;
    return data;
  },
  queryOne: function queryOne(object) {
    var data = object[Object.keys(object)[0]][0];
    delete data.__typename;
    return data;
  },
  query: function query(object) {
    return object[Object.keys(object)[0]];
  },
  "delete": function _delete(object) {
    return object[Object.keys(object)].affected_rows;
  }
};

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/*
 * path: String - Caminho base do módulo
 * module: Object - Componentes do módulo (página)
 * actions: Array - Ações a incluir na rotas, seguir o padrão: [{page: caminho_url}]; Onde 'page' é um dos componentes do módulo e 'page_path' é a url complementar após o parâmetro 'path'
 */

function ModuleRoute(_ref) {
  var path = _ref.path,
      module = _ref.module,
      moduleTitle = _ref.moduleTitle,
      actions = _ref.actions;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      alerta = _useState2[0],
      setAlerta = _useState2[1];

  return React__default.createElement(React__default.Fragment, null, actions.map(function (action, i) {
    var page = action.page,
        pagePath = action.pagePath,
        pageTitle = action.pageTitle;
    return React__default.createElement(reactRouterDom.Route, {
      key: i,
      exact: true,
      path: path + pagePath,
      component: function component() {
        document.title = (pageTitle ? pageTitle + ' - ' : '') + moduleTitle + ' - e-Estado';
        return module[page]({
          moduleTitle: moduleTitle,
          pageTitle: pageTitle,
          alerta: alerta,
          setAlerta: setAlerta,
          path: path
        });
      }
    });
  }));
}

exports.FixReturn = FixReturn;
exports.ModuleRoute = ModuleRoute;
