export default class UserInfo {
  constructor( profileName, profileJob, profileAvatar) {
    this._name = document.querySelector(profileName);
    this._job = document.querySelector(profileJob);
    this._profileAvatar = document.querySelector(profileAvatar);
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
    this._job.textContent = userInfo.about;
  }

   setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}