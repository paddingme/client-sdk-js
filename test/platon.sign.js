var testMethod = require("./helpers/test.method.js");
var Platon = require("../packages/web3-eth");

var platon = new Platon();

var method = "sign";

var tests = [
    {
        args: ["Hello World!$*", "0xeb014f8c8b418db6b45774c326a0e64c78914dc0"],
        formattedArgs: [
            "0xeb014f8c8b418db6b45774c326a0e64c78914dc0",
            "0x48656c6c6f20576f726c6421242a"
        ],
        result:
            "0x5763ab346198e3e6cc4d53996ccdeca0c941cb6cb70d671d97711c421d3bf7922c77ef244ad40e5262d1721bf9638fb06bab8ed3c43bfaa80d6da0be9bbd33dc1b",
        formattedResult:
            "0x5763ab346198e3e6cc4d53996ccdeca0c941cb6cb70d671d97711c421d3bf7922c77ef244ad40e5262d1721bf9638fb06bab8ed3c43bfaa80d6da0be9bbd33dc1b",
        call: "platon_" + method
    },
    {
        args: ["Hello Wolrd!$*", "0xeb014f8c8b418db6b45774c326a0e64c78914dc0"],
        formattedArgs: [
            "0xeb014f8c8b418db6b45774c326a0e64c78914dc0",
            "0x48656c6c6f20576f6c726421242a"
        ],
        result:
            "0x680b2c019eb81d5476012ca453a1ac2248dec3d89c2ed20d78177e2e0550b72d702d42c40943f6140b3d2e9fc9981c7fdd428ff93623020969e33b6b406e26851b",
        formattedResult:
            "0x680b2c019eb81d5476012ca453a1ac2248dec3d89c2ed20d78177e2e0550b72d702d42c40943f6140b3d2e9fc9981c7fdd428ff93623020969e33b6b406e26851b",
        call: "platon_" + method
    }
];

testMethod.runTests("platon", method, tests);
