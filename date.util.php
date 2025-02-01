<?php

$fmt = new IntlDateFormatter('fa_IR@calendar=persian', IntlDateFormatter::SHORT, IntlDateFormatter::NONE, 'Asia/Tehran', IntlDateFormatter::TRADITIONAL);
$today_jalali = $fmt->format(time());

$today_jalali = str_replace(['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'], ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], $today_jalali);