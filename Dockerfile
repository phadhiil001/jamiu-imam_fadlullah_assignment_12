FROM node:lts-iron

WORKDIR /jamiu-imam_fadlullah_ui_garden/

COPY public/ /jamiu-imam_fadlullah_ui_garden/public
COPY src/ /jamiu-imam_fadlullah_ui_garden/src
COPY package.json /jamiu-imam_fadlullah_ui_garden/
COPY . /jamiu-imam_fadlullah_ui_garden

RUN npm install

CMD ["npm", "run", "storybook"]

