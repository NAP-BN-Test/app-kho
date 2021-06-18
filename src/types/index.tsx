export interface Alert {
  type: string;
  message: string;
}

export interface UserLogin {
  userName: string;
  passWord: string;
}

export interface User {
  userinfo: string;
  accesstoken: string;
  permisson: string;
}

export interface KHO {
  Id: number;
  Code: string;
  NameVI: string;
  AddressVI: string;
}

export interface NHACUNGCAP {
  Id: number;
  Code: string;
  NameVI: string;
  DienThoai: string;
}
