# پاک کردن کش کلی
php artisan cache:clear        
# پاک کردن کش کانفیگ
php artisan config:clear       
# پاک کردن کش روت‌ها
php artisan route:clear        
# پاک کردن کش ویوهای Blade
php artisan view:clear         
# پاک کردن کش ایونت‌ها
php artisan event:clear        
# پاک کردن فایل‌های کامپایل‌شده
php artisan clear-compiled     
# پاک کردن همه کش‌ها با یک دستور
php artisan optimize:clear     

# پاک کردن دستی فایل‌های کش، ویو، سشن و پکیج‌ها
rm -rf bootstrap/cache/*
rm -rf storage/framework/cache/*
rm -rf storage/framework/views/*
rm -rf storage/framework/sessions/*
rm -rf storage/framework/routes.cache

php artisan optimize