# 🧹 Laravel Cache Clear Guide (Windows + Linux)

A handy reference for clearing all types of Laravel caches — works on Windows, Linux, and macOS.

---

## ✅ Artisan Commands for Cache Clearing

```bash
php artisan cache:clear        # Clear the application cache
php artisan config:clear       # Clear the configuration cache
php artisan route:clear        # Clear the route cache
php artisan view:clear         # Clear the compiled Blade views
php artisan event:clear        # Clear the event cache
php artisan clear-compiled     # Remove compiled class files
php artisan optimize:clear     # Clear all caches in one command

--
# 🛠️ Manually Delete Cache Files
# Linux/macOS:
--

rm -rf bootstrap/cache/*
rm -rf storage/framework/cache/*
rm -rf storage/framework/views/*
rm -rf storage/framework/sessions/*
rm -rf storage/framework/routes.cache

--
# Windows (CMD):
--

rmdir /s /q bootstrap\cache
rmdir /s /q storage\framework\cache
rmdir /s /q storage\framework\views
rmdir /s /q storage\framework\sessions
del /f /q storage\framework\routes.cache

# ⚠️ On Windows, these commands will delete entire folders. Be cautious and only use them when you're sure.

# 🚀 Re-optimize Laravel (Optional)
# After clearing caches, you may want to re-optimize your Laravel project:

php artisan optimize