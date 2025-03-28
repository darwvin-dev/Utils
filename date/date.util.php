<?php

$fmt = new IntlDateFormatter('fa_IR@calendar=persian', IntlDateFormatter::SHORT, IntlDateFormatter::NONE, 'Asia/Tehran', IntlDateFormatter::TRADITIONAL);
$today_jalali = $fmt->format(time());

$today_jalali = str_replace(['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'], ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], $today_jalali);

function gregorian_to_jalali($g_y, $g_m, $g_d, $delimiter = '/')
{
    $g_days_in_month = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    $j_days_in_month = array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);

    if ($g_y > 1600) {
        $jy = 979;
        $g_y -= 1600;
    } else {
        $jy = 0;
        $g_y -= 621;
    }

    $gy2 = ($g_m > 2) ? ($g_y + 1) : $g_y;
    $days = (365 * $g_y) + floor(($gy2 + 3) / 4) - floor(($gy2 + 99) / 100) + floor(($gy2 + 399) / 400) - 80 + $g_d;

    for ($i = 0; $i < $g_m - 1; ++$i) {
        $days += $g_days_in_month[$i];
    }

    $jy += 33 * floor($days / 12053);
    $days %= 12053;
    $jy += 4 * floor($days / 1461);
    $days %= 1461;

    if ($days > 365) {
        $jy += floor(($days - 1) / 365);
        $days = ($days - 1) % 365;
    }

    for ($i = 0; ($days >= $j_days_in_month[$i]) && ($i < 11); ++$i) {
        $days -= $j_days_in_month[$i];
    }
    $jm = $i + 1;
    $jd = $days + 1;

    return $jy . $delimiter . str_pad($jm, 2, '0', STR_PAD_LEFT) . $delimiter . str_pad($jd, 2, '0', STR_PAD_LEFT);
}