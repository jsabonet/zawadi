# Generated by Django 5.1.7 on 2025-06-18 16:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contatos', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mensagemcontato',
            old_name='mensagem',
            new_name='message',
        ),
        migrations.RenameField(
            model_name='mensagemcontato',
            old_name='nome',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='mensagemcontato',
            old_name='telefone',
            new_name='phone',
        ),
    ]
