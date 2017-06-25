const fs = require('fs');
const path = require('path');

var arguments = process.argv.splice(2);
var filepath = process.argv[1];

//类型
const TYPE_DIRECTORY = 'directory';
const TYPE_MODULE = 'module';
const TYPE_FEATURE = 'feature';


if (arguments.length && arguments[0] === TYPE_DIRECTORY) {
  createDirectory(arguments[1]);
} else if (arguments.length && arguments[0] === TYPE_MODULE) {
  createModule(arguments[1]);
} else if (arguments.length && arguments[0] === TYPE_FEATURE) {
  createFeature();
}

/**
 * 添加目录
 */
function createDirectory(moduleName) {
  const content = "//我是一个人，不是一个神";
  FileUtil().mkFile(PathUtil().getResourceJs(moduleName), content);
  FileUtil().mkFile(PathUtil().getVuexModuleJs(moduleName), content);
  FileUtil().mkFile(PathUtil().getVuexActionJs(moduleName), content);
}

/**
 * 添加模块
 */
function createModule(moduleName) {
  //替换模板
  TemplateUtil().action(moduleName);
  TemplateUtil().module(moduleName);
  //文件添加内容
  FileAddUtil().vuexActionIndex(moduleName);
  FileAddUtil().vuexModuleIndex(moduleName);
  FileAddUtil().vuexMutationTypes(moduleName);
}

/**
 * 添加功能
 */
function createFeature() {

}


/**
 * 文件操作工具类
 */
function FileUtil() {
  return {
    //创建文件夹
    mkdir: function(filePath) {
      fs.mkdir(filename);
    },

    //创建文件
    mkFile: function(filePath, content) {
      fs.writeFile(filePath, content, 'utf8', function(err) {
        if (err) throw err;
        console.log('It\'s saved!');
      });
    },

    readFile: function(filePath) {
      var content = fs.readFileSync(filePath, 'utf8');
      return content;
    }
  }
}

/**
 * 文件路径工具类
 */
function PathUtil() {
  return {
    getResourceJs: function(moduleName) {
      return path.join(__dirname, `../vue/src/resource/${moduleName}Api.js`);
    },

    getVuexModuleJs: function(moduleName) {
      return path.join(__dirname, `../vue/src/vuex/modules/${moduleName}Mutation.js`);
    },

    getVuexModuleIndex: function(moduleName) {
      return path.join(__dirname, `../vue/src/vuex/modules/index.js`);
    },

    getVuexActionJs: function(moduleName) {
      return path.join(__dirname, `../vue/src/vuex/actions/${moduleName}Action.js`);
    },

    getVuexActionIndex: function(moduleName) {
      return path.join(__dirname, `../vue/src/vuex/actions/index.js`);
    },

    getTemplateAction: function(moduleName) {
      return path.join(__dirname, `/action.js`);
    },

    getTemplateModule: function(moduleName) {
      return path.join(__dirname, `/module.js`);
    },

    getMutationTypes: function(moduleName) {
      return path.join(__dirname, `../vue/src/vuex/mutationTypes.js`);
    },

  }
}

/**
 * 替换文件内容工具类
 */
function FileAddUtil() {
  return {
    /**
     * mudule/index.js添加新模块内容
     */
    vuexModuleIndex: function (moduleName) {
      var path = PathUtil().getVuexModuleIndex();
      var content = FileUtil().readFile(path);
      var str = `import ${moduleName} from './${moduleName}Mutation';\nexport default {\n  ${moduleName},`;
      content = content.replace(/export default {/g, str);
      // 创建index.js
      FileUtil().mkFile(path, content);
    },

    /**
     * action/index.js添加新模块内容
     */
    vuexActionIndex: function (moduleName) {
      var path = PathUtil().getVuexActionIndex();
      var content = FileUtil().readFile(path);
      var str = `import * as ${moduleName}Action from './${moduleName}Action';\nexport default {\n  ...${moduleName}Action,`;
      content = content.replace(/export default {/g, str);
      // 创建index.js
      FileUtil().mkFile(path, content);
    },

    vuexMutationTypes: function (moduleName) {
      var path = PathUtil().getMutationTypes();
      var content = FileUtil().readFile(path);
      content += `\n`;
      content += `export const ${moduleName.toUpperCase()}_ADD = '${moduleName.toUpperCase()}_ADD';\n`;
      content += `export const ${moduleName.toUpperCase()}_DELETE = '${moduleName.toUpperCase()}_DELETE';\n`;
      content += `export const ${moduleName.toUpperCase()}_UPDATE = '${moduleName.toUpperCase()}_UPDATE';\n`;
      content += `export const ${moduleName.toUpperCase()}_QUERY = '${moduleName.toUpperCase()}_QUERY';\n`;
      content += `export const ${moduleName.toUpperCase()}_GET = '${moduleName.toUpperCase()}_GET';\n`;
      // 创建index.js
      FileUtil().mkFile(path, content);
    }
  }
}

/**
 * 替换模板内容生成新文件
 */
function TemplateUtil() {
  return {
    action: function (moduleName) {
      var path = PathUtil().getTemplateAction();
      var content = FileUtil().readFile(path);
      content = content.replace(/{moduleName}/g, moduleName);
      content = content.replace(/{MODULENAME}/g, moduleName.toUpperCase());
      // 创建js
      FileUtil().mkFile(PathUtil().getVuexActionJs(moduleName), content);
    },

    module: function (moduleName) {
      var path = PathUtil().getTemplateModule();
      var content = FileUtil().readFile(path);
      content = content.replace(/{moduleName}/g, moduleName);
      content = content.replace(/{MODULENAME}/g, moduleName.toUpperCase());
      // 创建js
      FileUtil().mkFile(PathUtil().getVuexModuleJs(moduleName), content);
    }
  }
}
