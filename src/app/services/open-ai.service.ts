import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { filter, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  // readonly configuration = new OpenAI({
  //   apiKey: 'sk-UfzW5djc3JFk8u6llJPFnTw0PbCDPOZKhBkcevcRJNuNpDq0',
  // });

  // generateText(text: string) {
  //   from(this.configuration.completions.create({
  //     model: "text-davinci-003",
  //     prompt: text,
  //     max_tokens: 256
  //   })).pipe(
  //     filter((resp: any) => !!resp && !!resp.data),
  //     map((resp: any) => resp.data),
  //     filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
  //     map(data => data.choices[0].text)
  //   ).subscribe(data => {
  //     console.log("data >>", data);
  //   });
}



// constructor() {
// }
// }
