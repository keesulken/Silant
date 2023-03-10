# Generated by Django 4.1.7 on 2023-03-07 22:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0002_alter_machine_options_alter_machinedirectory_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='client',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='machines_in_use', to='service.clientprofile', verbose_name='Клиент'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='service_company',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='maintain_units', to='service.servicecompanyprofile', verbose_name='Сервисная компания'),
        ),
    ]
