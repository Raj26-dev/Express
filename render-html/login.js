export default function login(){
    return `<form action="/submit" method="POST">
      
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="enter your email" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="enter your password" required>
      </div>

      <button type="submit" class="btn-login">Log In</button>

    </form>`
}