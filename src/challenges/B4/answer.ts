/**
 * In this challenge, you have to regroup messages into an array of day based on their
 * sentAt property, messages in a day must be sorted by their sent at prop (oldest first)
 * The main array must be sort chronologically by their day dates (oldest first)
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ...
 * instead of setHours, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [{ content: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { content: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { content: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
 * Output: [
 *      {
 *          day: "2020-11-17T00:00:00.000Z",
 *          messages: [
 *              { content: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
 *              { content: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
 *          ]
 *      },
 *      {
 *          day: "2020-11-18T00:00:00.000Z",
 *          messages: [
 *              { content: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
 *          ]
 *      },
 * ]
 *
 * @param messages List of messages, unsorted and not grouped in days
 * @returns Sorted list of days (only days with messages!) with a list of sorted messages of the day
 */

// ↓ uncomment bellow lines and add your response!
// solution 1
// export default function ({ messages }: { messages: Message[] }): DayMessages[] {
// 	const dateList: Date[] = [];
// 	messages.forEach((message) => {
// 		if (message.content) {
// 			let sentDate = new Date(message.sentAt);
// 			sentDate.setUTCHours(0, 0, 0, 0);
// 			if (!dateList.some((el) => el.getTime() === sentDate.getTime())) {
// 				dateList.push(sentDate);
// 			}
// 		}
// 	});
// 	dateList.sort((a, b) => {
// 		return a.getTime() - b.getTime();
// 	});
// 	const response = dateList.map((date) => {
// 		return {
// 			day: `${date.getUTCFullYear()}-${String(
// 				date.getUTCMonth() + 1
// 			).padStart(2, "0")}-${String(date.getUTCDate()).padStart(
// 				2,
// 				"0"
// 			)}T${String(date.getUTCHours()).padStart(2, "0")}:${String(
// 				date.getUTCMinutes()
// 			).padStart(2, "0")}:${String(date.getUTCSeconds()).padStart(
// 				2,
// 				"0"
// 			)}.${String(date.getUTCMilliseconds()).padStart(3, "0")}Z`,
// 			messages: messages
// 				.filter((element) => {
// 					let elementDate = new Date(element.sentAt);
// 					elementDate.setUTCHours(0, 0, 0, 0);
// 					return elementDate.getTime() === date.getTime();
// 				})

// 				.sort((a, b) => {
// 					return (
// 						new Date(a.sentAt).getTime() -
// 						new Date(b.sentAt).getTime()
// 					);
// 				}),
// 		};
// 	});
// 	return response;
// }

// solution 2
// export default function ({ messages }: { messages: Message[] }): DayMessages[] {
// 	let response = {};
// 	messages.forEach((message) => {
// 		let date = new Date(message.sentAt);
// 		let key = `${date.getUTCFullYear()}-${String(
// 			date.getUTCMonth() + 1
// 		).padStart(2, "0")}-${String(date.getUTCDate()).padStart(
// 			2,
// 			"0"
// 		)}T00:00:00.000Z`;
// 		if (!response[key]) {
// 			response[key] = {
// 				day: key,
// 				messages: <Message[]>[],
// 			};
// 		}
// 		response[key].messages.push({ ...message });
// 		response[key].messages.sort((a, b) => {
// 			return new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime();
// 		});
// 	});
// 	const resValue = Object.values(response) as DayMessages[];
// 	return resValue.sort((a, b) => {
// 		return new Date(a.day).getTime() - new Date(b.day).getTime();
// 	});
// }
// used interfaces, do not touch
export interface Message {
	content: string;
	sentBy: string;
	sentAt: string;
	message: string;
}

export interface DayMessages {
	day: string;
	messages: Message[];
}
