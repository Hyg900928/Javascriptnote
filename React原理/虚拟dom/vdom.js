const vnodeType = {
  HTML: 'HTML',
  TEXT: 'TEXT',
  COMPONENT: 'COMPONENT',
  CLASS_COMPONENT: 'CLASS_COMPONENT'
};

const childType = {
  EMPTY: 'EMPTY',
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE'
};

const createElement = (tag, data, children = null) => {
  let flag;
  if (typeof tag === 'string') {
    // 普通的html标签
    flag = vnodeType.HTML;
  } else if (typeof tag === 'function') {
    flag = vnodeType.COMPONENT;
  } else {
    flag = vnodeType.TEXT;
  }

  // 子元素的类型
  let childrenFlag;
  if (children === null) {
    childrenFlag = childType.EMPTY;
  } else if (Array.isArray(children)) {
    const len = children.length;
    if (len === 0) {
      childrenFlag = childType.EMPTY;
    } else {
      childrenFlag = childType.MULTIPLE;
    }
  } else {
    childrenFlag = childType.SINGLE;
    children = createTextVnode(children + '');
    console.log('XXX', children);
  }

  // 返回vode
  return {
    flag, // vnode类型
    tag, // 标签,dvi ,文本没有tag
    data,
    children,
    childrenFlag,
    el: null // 存储真实的dom
  };
};

// 新建文本类型的vnode
const createTextVnode = text => {
  return {
    flag: vnodeType.TEXT,
    tag: null,
    data: null,
    children: text,
    childrenFlag: childType.EMPTY
  };
};

/**
 * 渲染
 * @param vnode 要渲染的虚拟dom
 * @param container 渲染的容器
 */
const render = (vnode, container) => {
  // 区分首次渲染和再次渲染
  if(container.vnode) {

    // 更新
    patch(container.vnode, vnode, container);
  } else {

    // 首次挂载
    mount(vnode, container);
  }

  container.vnode = vnode;
};


/**
 * 更新元素, diff算法的核心
 * @param prev, 旧的vnode
 * @param next, 新的vnode
 * @param container, 挂载的容器
 */
function patch(prev, next, container) {
  const prevFlag = prev.flag;
  const nextFlag = next.flag;

  // prev 是text next是p
  if(prevFlag !== nextFlag) {

    // 做移除替换操作
    replaceNode(prev, next, container);
  } else if(nextFlag === vnodeType.HTML) {
    patchElement(prev, next, container);
  } else if(nextFlag === vnodeType.TEXT) {
    patchText(prev, next);
  }
}

// 更新元素, 重点!!!
function patchElement(prev, next, container) {
  if(prev.tag !== next.tag) {
    replaceNode(prev, next, container);
    return;
  }
  let el = (next.el = prev.el);
  let prevData = prev.data;
  let nextData = next.data;
  if(nextData) {
    for( let key in nextData) {
      let prevVal = prevData[key];
      let nextVal = nextData[key];
      patchData(el, key, prevVal, nextVal);
    }
  }
  if(prevData) {
    for( let key in nextData) {
      let prevVal = prevData[key];
      if(prevVal && !nextData.hasOwnProperty(key)) {
        patchData(el, key, prevVal, null);
      }
    }
  }
  // data更新完毕, 下面开始更新子元素
  patchChildren()

}

// 更新文本
function patchText(prev, next) {
  let el = (next.el = prev.el);
  if(next.children !== prev.children) {
    el.nodeValue = next.children;
  }
}

/**
 * 移除dom(替换)
 * @param prev
 * @param next
 * @param container
 */
function replaceNode(prev, next, container) {
  container.removeChild(prev.el);
  mount(next, container);
}

/**
 * 首次挂载元素
 */
function mount(vnode, container) {
  const { flag } = vnode;
  if (flag === vnodeType.HTML) {
    mountElement(vnode, container);
  } else if (flag === vnodeType.TEXT) {
    mountText(vnode, container);
  }
}

// 挂载html元素
function mountElement(vnode, container) {
  let { tag, childrenFlag, children, data } = vnode;
  let dom = document.createElement(tag);

  // 保存真实dom
  vnode.el = dom;

  // 挂载data属性
  if (data) {
    for (let key in data) {
      patchData(dom, key, null, data[key]);
    }
  }

  if (childrenFlag !== childType.EMPTY) {
    if (childrenFlag === childType.SINGLE) {
      mount(children, dom);
    } else if (childrenFlag === childType.MULTIPLE) {
      for (let i = 0; i < children.length; i++) {
        mount(children[i], dom);
      }
    }
  }
  // console.log('dom', dom);
  container.appendChild(dom);
}

// 挂载文本元素
function mountText(vnode, container) {
  const dom = document.createTextNode(vnode.children);
  vnode.el = dom;
  container.appendChild(dom);
}

/**
 * 挂载dota属性
 * @param el el
 * @param key 属性
 * @param prev 旧值
 * @param next 新值
 */
function patchData(el, key, prev, next) {
  switch (key) {
    case 'style':
      for (let k in next) {
        el.style[k] = next[k];
      }
      for (let k in prev) {
        if(!next.hasOwnProperty(k)) {
          el.style[k] = '';
        }
        el.style[k] = next[k];
      }
      break;
    case 'class':
      el.className = next;
      break;
    default:
      if (key[0] === '@') {
        if(prev) {
          el.removeEventListener(key.slice(1), prev);
        }
        if (next) {
          el.addEventListener(key.slice(1), next);
        }
      } else {
        el.setAttribute(key, next);
      }
  }
}
