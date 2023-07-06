#!/usr/bin/env bash
(
    set -x
    
    rm -rf *
    cp -r /mnt/c/Users/myste/OneDrive/hypercube-projection-2/dist/* .
    git add --all
)

echo
echo Ready to commit
