package com.svse.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.svse.dao.UserDAO;
import com.svse.entity.Userinfo;
import com.svse.service.UserService;

@Service
public class UserImpl implements UserService {

	@Autowired
	private UserDAO userdao;

	@Override
	public void addUser(Userinfo user) {
		this.userdao.save(user);
	}

	@Override
	public List<Userinfo> getAllUser() {

		return this.userdao.findAll();
	}

	@Override
	public void updateUser(Userinfo user) {

		this.userdao.save(user); // 给主键时就做修改 ，不给主键时就做增加
	}

	@Override
	public Userinfo getOne(int uid) {

		return this.userdao.findOne(uid);
	}

	@Override
	public void delUser(int uid) {
		this.userdao.delete(uid);
	}

    @Override
    public Userinfo getUserinfoByMaxId() {
        return this.userdao.getUserinfoByMaxId();
    }

}
