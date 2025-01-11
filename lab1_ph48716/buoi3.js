function doSomething(callback) {
    console.log('Bắt đầu');
    // delay 2 giây
    // setTimeout(() => callback(), 2000)
    callback(5,10);
    }
    
    function onSuccess() {
    console.log('Làm gì đó ở đây');
    console.log('Kết thúc');
    };

    function tinhtong (a,b) {
        console.log('Tong cua 2 so la: '+ a+b)
    }
    doSomething(tinhtong);