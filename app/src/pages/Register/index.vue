<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <a href="login.html" target="_blank">登陆</a>
        </span>
      </h3>
      <el-form label-width="150px" :model="form" :rules="rules" ref="form">
        <el-form-item label="手机号：" class="content" prop="phone">
          <el-input
            style="width: 300px"
            type="text"
            v-model="form.phone"
            placeholder="请输入你的手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码：" class="content" prop="code">
          <el-input
            style="width: 300px"
            type="text"
            placeholder="请输入验证码"
            v-model="form.code"
          ></el-input>
          <button style="width: 100px; height: 40px" @click="getCode">
            获取验证码
          </button>
        </el-form-item>
        <el-form-item label="登陆密码：" class="content" prop="password">
          <el-input
            style="width: 300px"
            type="password"
            placeholder="请输入你的登录密码"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" class="content" prop="password1">
          <el-input
            style="width: 300px"
            v-model="form.password1"
            type="password"
            placeholder="请输入确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="content" prop="agree">
          <el-checkbox
            v-model="form.agree"
            label="同意协议并注册《尚品汇用户协议》"
          ></el-checkbox>
          <!-- <span>同意协议并注册《尚品汇用户协议》</span> -->
        </el-form-item>
      </el-form>
      <!-- <div class="content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="phone" />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="code" />
        <button style="width: 100px; height: 40px" @click="getCode">
          获取验证码
        </button>
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input
          type="password"
          placeholder="请输入你的登录密码"
          v-model="password"
        />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input
          type="password"
          placeholder="请输入确认密码"
          v-model="password1"
        />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="agree" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg">错误提示信息</span>
      </div> -->
      <div class="btn">
        <button @click="finishregister">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    var phone = /^[1][3,4,5,7,8][0-9]{9}$/;
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!phone.test(value)) {
          callback(new Error("手机号格式有误"));
        } else {
          callback();
        }
      }, 500);
    };
    const validPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      }
      callback();
      // else {
      //   if (this.form.password1) {
      //     this.$refs.form.validateField("validPass2");
      //   }
      // }
    };
    const valiPass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        phone: "",
        code: "",
        password: "",
        password1: "",
        agree: true,
      },
      rules: {
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "change" }],
        password: [{ required: true, validator: validPass, trigger: "blur" }],
        password1: [{ required: true, validator: valiPass2, trigger: "blur" }],
        agree: [
          { required: true, message: "请点击同意协议", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    //获取验证码
    async getCode() {
      console.log(this.form.agree);
      //简单判断一下---至少用数据
      try {
        //如果获取到验证码
        const { phone } = this.form;
        phone && (await this.$store.dispatch("getCode", phone));
        //将组件的code属性值变为仓库中验证码[验证码直接自己填写了]
        this.form.code = this.$store.state.user.code;
      } catch (error) {}
    },
    finishregister() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.form.agree) {
            try {
              let { phone, code, password, password1 } = this.form;
              phone &&
                password &&
                code &&
                this.$store.dispatch("userRegister", {
                  phone,
                  code,
                  password,
                });
              this.$router.push("/login");
            } catch (error) {
              alert(error.message);
            }
          }else{
            alert("请同意协议");
          }
        }
      });
      // 先处理业务再考虑表单验证
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 10px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;
      text-align: left;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
  