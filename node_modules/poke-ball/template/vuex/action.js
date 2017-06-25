
// actions方法名称与vue methods方法同步

import * as types from '../mutationTypes';
import {moduleName}Api from '../../resource/{moduleName}Api';

// 添加
export const add = ({ commit }, data) => {
  amtApi
    .{moduleName}Resource()
    .save(data)
    .then(result => {
      commit(types.{MODULENAME}_ADD, result);
    });
};

// 删除
export const del = ({ commit }, id) => {
  amtApi
    .{moduleName}Resource()
    .del(id)
    .then(result => {
      commit(types.{MODULENAME}_DEL, result);
    });
};

// 修改
export const update = ({ commit }, data) => {
  amtApi
    .{moduleName}Resource()
    .update(data)
    .then(result => {
      commit(types.{MODULENAME}_UPDATE, result);
    });
};

// 查询(对象)
export const query = ({ commit }, data) => {
  amtApi
    .{moduleName}Resource()
    .query(data)
    .then(result => {
      commit(types.{MODULENAME}_QUERY, result);
    });
};

// 查询(id)
export const get = ({ commit }, id) => {
  amtApi
    .{moduleName}Resource()
    .get(id)
    .then(result => {
      commit(types.{MODULENAME}_GET, result);
    });
};
