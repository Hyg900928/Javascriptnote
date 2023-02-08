//
// Created by heyungao on 2023/2/7.

#include <stdio.h>

/**
 * this program calculator summary from 0 to 9
 * @param argc parameter count
 * @param argv parameters
 * @return 0
 */
int main(int argc, char **argv) {

  // 变量命名要明确 比如用sum 变量
  int sum = 0;
  int i = 0;
  while (i < 10) {
    sum = sum + i;
    i++;
  }
  printf("a = %d\n", sum);
  return 0;
}