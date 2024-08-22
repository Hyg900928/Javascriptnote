const resizableElement = document.getElementById('myResizableDiv');
let isResizing = false;
let direction;
let startX, startY, startWidth, startHeight;
// 鼠标按下事件
resizableElement.addEventListener('mousedown', (e) => {

  if (e.target.classList.contains('handle')) {
    isResizing = true;
    direction = e.target.dataset.direction;

    // 初始化 startX、startY、startWidth 和 startHeight
    startX = e.clientX;
    startY = e.clientY;
    startWidth = resizableElement.clientWidth;
    startHeight = resizableElement.clientHeight;
  } else {
    // 如果不是点击在 handle 上，则启用拖动整个 div
    isResizing = false;
    startX = e.clientX - resizableElement.offsetLeft;
    startY = e.clientY - resizableElement.offsetTop;
  }
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', () => {
    isResizing = false;
    direction = null;
    document.removeEventListener('mousemove', handleMouseMove);
  });
});

// 鼠标移动事件
function handleMouseMove(e) {
  if (isResizing) {
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    switch (direction) {
      case 'top':
        resizableElement.style.height = `${startHeight - deltaY}px`;
        resizableElement.style.top = `${startY + deltaY}px`;
        break;
      case 'right':
        resizableElement.style.width = `${startWidth + deltaX}px`;
        break;
      case 'bottom':
        resizableElement.style.height = `${startHeight + deltaY}px`;
        break;
      case 'left':
        resizableElement.style.width = `${startWidth - deltaX}px`;
        resizableElement.style.left = `${startX + deltaX}px`;
        break;
      case 'top-left':
        resizableElement.style.width = `${startWidth - deltaX}px`;
        resizableElement.style.height = `${startHeight - deltaY}px`;
        resizableElement.style.top = `${startY + deltaY}px`;
        resizableElement.style.left = `${startX + deltaX}px`;
        break;
      case 'top-right':
        resizableElement.style.width = `${startWidth + deltaX}px`;
        resizableElement.style.height = `${startHeight - deltaY}px`;
        resizableElement.style.top = `${startY + deltaY}px`;
        break;
      case 'bottom-left':
        resizableElement.style.width = `${startWidth - deltaX}px`;
        resizableElement.style.height = `${startHeight + deltaY}px`;
        resizableElement.style.left = `${startX + deltaX}px`;
        break;
      case 'bottom-right':
        resizableElement.style.width = `${startWidth + deltaX}px`;
        resizableElement.style.height = `${startHeight + deltaY}px`;
        break;
      default:
        break;
    }
  } else {
    // 如果是拖动整个 div，则更新 div 的位置
    resizableElement.style.left = `${e.clientX - startX}px`;
    resizableElement.style.top = `${e.clientY - startY}px`;
  }
}
