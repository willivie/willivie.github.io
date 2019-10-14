package com.svse.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.svse.entity.Userinfo;
import org.springframework.data.jpa.repository.Query;

public interface UserDAO extends JpaRepository<Userinfo, Integer> {

    @Query(value = "select a from Userinfo a where a.uid=(select max(uid) from Userinfo)")
    public Userinfo getUserinfoByMaxId();

}
