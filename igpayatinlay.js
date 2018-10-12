// For words beginning with a vowel, add "way" to the end.

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

//If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

//For words beginning with "y", treat "y" as a consonant.


// take the string and split it up by (" ")
// find if it starts with a vowel or NOT VOWEL
// make a function

// If a word begins with a "false" return, pushes "false" value to the end of the word...runs through a loop until the first vowel ("true" return) before continuing to the next word.

var ourString = "The quick brown fox jumped over the lazy dog"

function phraseArr (str) {
	let splitArr = str.split(" ")
	let emptyArr = []
	for(var w=0; w < splitArr.length; w++) {
		emptyArr.push(splitArr[w].split(""))
	}
	return emptyArr
}

function testVowel(arr) {
	let vowelReg = /[aeiou]/i
	let emptyArr = []
	let finishArr = []
	for (var i=0; i < arr.length; i++) {
		if (vowelReg.test(arr[i][0])) {
			arr[i].push('-way')
			// console.log(arr[i])
			finishArr[i] = arr[i].join('')
		} else if ((arr[i][0] == "Q" || arr[i][0] == "q") && (arr[i][1] == "U" || arr[i][1] == "u")) {
			finishArr[i] = arr[i].slice(2).concat('-quay').join('')
		} else {
			for (var c=0; c < arr[i].length; c++) {
				if (vowelReg.test(arr[i][c])) {
					emptyArr[i] = arr[i].splice(0, c)
					// emptyArr.push(arr[i][c])

					finishArr[i] = (arr[i].join('') + "-" + emptyArr[i].join('') + "ay")

					// console.log(finishArr.push(pigLatinArr))


					break;
					// arr[i].shift();
					// console.log(arr[i])


					// console.log(arr[i].splice(arr[i].length -1, 0, arr[i][c]).concat(arr[i][0]))
				}

			}
		}

	}
	console.log(finishArr.join(" "))
}
// if the first letter is a consonant we wanna push it to a new array. if the first letter of the index, or however many are consonant, push them to a new array, else if its a vowel, then stop.
//
// and then join the two arrays.

// so we need an empty array. and we write the if loop, so that it checks for consonants, if its a consonant, push it
// to the limit.


// cycle thrugh NOT VOWELS until you get to a vowel and then slice the


// console.log(arr[i][0] + " " +vowelReg.test(arr[i][0]))
// console.log(arr[i].includes(vowels[i]))


// function test(arr) {
// 	let emptyArr = []
// 	for(var w=0; w < arr.length; w++) {
// 		emptyArr.push(arr[w].split(""))
// 	// for(var l=0, l < arr[w].length; )
// 	}
// 	return emptyArr
// }

let chrisArr = phraseArr(ourString)
// console.log(chrisArr)
testVowel(chrisArr)


// if true , push way to end of array

//

// var newArr = shutUp(ourString)
// // console.log(shutUp(ourString))
//
// function isVowel (arr) {
//
// 	let regExp = /[aeiou]/
//
// 	for(var i = 0; i < arr.length; i++) {
// 		// console.log(arr[i] + " " + regExp.test(arr[i]))
// 	}
//
// }
//
// isVowel(newArr)
