ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation

  index do
    selectable_column
    id_column
    column :email
    column :current_sign_in_at
    column :sign_in_count
    column :created_at
    actions
  end

  filter :email
  filter :current_sign_in_at
  filter :sign_in_count
  filter :created_at

  form html: { "data-controller" => "hello" } do |f|
    f.inputs do
      f.input :email
      f.li <<-HTML.html_safe
        <h3>Password stuff below</h3>
        <div>
          <select data-hello-target="toggle" name="toggle_password">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </div>
      HTML
      f.input :password, wrapper_html: { "data-hello-target" => "password" }
      f.input :password_confirmation, wrapper_html: { "data-hello-target" => "password" }
    end
    f.actions
  end
end
