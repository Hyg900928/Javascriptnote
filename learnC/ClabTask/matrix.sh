#!/bin/bash

# Compile the library
echo "开始生成动态链接库..."
gcc matrix_multi_pointer.c matrix_multi_array.c -fPIC -shared -o libmatrix.so
echo "动态链接库已生成"

# Test the library
echo "将主应用和动态库链接生成可执行文件 matrix_multi...."
gcc main.c -L. -lmatrix -o matrix_multi
LD_LIBRARY_PATH=. ./matrix_multi

# Clean up
eco "清除动态链接库和可执行文件"
rm libmatrix.so matrix_multi