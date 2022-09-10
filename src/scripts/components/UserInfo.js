export default class UserInfo {
  constructor( profileName, profileJob, profileAvatar ) {
    this._name = document.querySelector(profileName);
    this._job = document.querySelector(profileJob);
    this._avatar= document.querySelector(profileAvatar);
  }

 getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._job.textContent,
    };
    return userInfo;
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    console.log(this._name)
    this._job.textContent = userInfo.about;
  }

   setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}