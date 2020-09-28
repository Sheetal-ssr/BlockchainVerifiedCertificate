const cv = require('opencv4nodejs');
const mat = cv.imread('./images/myself.jpg');

const font = cv.FONT_HERSHEY_PLAIN


const green = new cv.Vec3(0, 255, 0);
mat.putText("Yatharth Arora",new cv.Point2(300,200),font,3,green,6);

cv.imreadAsync('./images/myself.jpg', (err, mat) => { })


cv.imshow('a window name', mat);
cv.waitKey();
