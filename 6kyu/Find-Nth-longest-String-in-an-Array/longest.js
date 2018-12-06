function longest(arr, n) {
    let newarr = arr.slice(0);
    newarr.sort((a, b) => {
        return b.length - a.length || arr.indexOf(a) - arr.indexOf(b)
    });
    return newarr[n - 1];
}


longest(['Hello', 'World', 'Codewars', 'Katas'], 3);