#!/bin/bash


echo "开始编译wasm. ."

emcc -o matrix.js ./matrix_multi_array.c \
     -s ALLOW_MEMORY_GROWTH=1 \
     -s WASM=1 \
     -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
     -s USE_WEBGL2=1 \
     -s LINKABLE=1 \
     -s ASSERTIONS=2


echo "wasm编译成功"
