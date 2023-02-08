//
// Created by heyungao on 2023/2/7.
//
#include <stdio.h>

int main() {
  int a = 0;
  int i = 0;
  while (i < 10) {
    a = a + i;
    i++;
  }
  printf("a=%d\n", a);
  return 0;
}